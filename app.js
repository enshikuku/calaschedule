import express from 'express'
import mysql from 'mysql'
import session from 'express-session'
import bcrypt from 'bcrypt'
import multer from 'multer'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import path from 'path'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({
    secret: 'da',
    saveUninitialized: false,
    resave: true
}))
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.DATABASE
})

// Define multer storage for profile pictures
const profilepicture = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/profilepicture')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const uploadprofilePicture = multer({ storage: profilepicture })

// Middleware to set locals
app.use((req, res, next) => {
    res.locals.username = req.session.username !== undefined ? req.session.username : 'Guest'
    res.locals.isLoggedIn = req.session.user_id !== undefined
    res.locals.user_id = req.session.user_id
    res.locals.lecturer = req.session.lecturer !== undefined ? req.session.lecturer : false
    res.locals.admin = req.session.admin !== undefined ? req.session.admin : false
    res.locals.student = req.session.student !== undefined ? req.session.student : false
    next()
})

// Function to generate random id
function generateid() {
    const characters = '0123456789'
    const genid = Array.from({ length: 3 }, () => characters.charAt(Math.floor(Math.random() * characters.length)))
    return genid.join('')
}

// Function to generate random OTP
function generateotp() {
    const characters = '1234567890'
    const OTP = Array.from({ length: 4 }, () => characters.charAt(Math.floor(Math.random() * characters.length)))
    return OTP.join('')
}

// Function to check if ID exists in database
function checkIfIdExists(id, sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results.length > 0)
            }
        })
    })
}

// Configuration for email sending
const config = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.GMAILPASSWORD
    }
}

// Function to send email
const sendMail = (data, callback) => {
    const transporter = nodemailer.createTransport(config)
    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.error('Error sending email:', error)
            callback(error)
        } else {
            console.log('Email sent: ' + info.response)
            callback(null)
        }
    })
}

// Route to render the home page
app.get('/', (req, res) => {
    let testimonials = 'SELECT * FROM testimonials'
    connection.query(testimonials, (error, results) => {
        if (error) {
            console.error('Error querying testimonials:', error)
            res.status(500).send('Error querying testimonials')
            return
        }
        res.render('index', { testimonials: results })
    })
})

// Route to handle signup page rendering
app.get('/signup', (req, res) => {
    const user = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
    let departmentSQL = 'SELECT * FROM departments'
    connection.query(departmentSQL, (error, departments) => {
        if (error) {
            console.error('Error querying departments:', error)
            res.status(500).send('Error querying departments')
            return
        }
        res.render('signup', { error: false, user: user, departments: departments })
    })
})

// Route to handle signup form submission
app.post('/signup', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    }
    if (user.password === user.confirmpassword) {
        try {
            let sql = 'SELECT * FROM user WHERE email = ?'
            const results = await checkIfIdExists(user.email, sql)
            if (results.length > 0) {
                let message = 'An account exists with that email number!'
                user.email = ''
                res.render('signup', { error: true, message: message, user: user })
            } else {
                let newId = ''
                let sql = 'SELECT * FROM user WHERE user_id = ?'
                do {
                    newId = generateid()
                } while (await checkIfIdExists(newId, sql))

                let OTP = generateotp()
                let otpsql = 'SELECT * FROM otp WHERE otpcode = ?'
                do {
                    OTP = generateotp()
                } while (await checkIfIdExists(OTP, otpsql))
                req.session.otp = OTP
                let sqlotp3 = 'SELECT * FROM otp WHERE email = ?'
                const otpResults = await checkIfIdExists(user.email, sqlotp3)
                if (otpResults.length > 0) {
                    let message = 'An OTP has already been sent to your email. Please check your email and enter the OTP to verify your account.'
                    res.render('otp', { error: true, message: message, user: user, newId: newId })
                } else {
                    let otpsql2 = 'INSERT INTO otp (otpcode, email) VALUES (?, ?)'
                    connection.query(otpsql2, [OTP, user.email], async (error, results) => {
                        if (error) {
                            console.error('Error inserting OTP:', error)
                            res.status(500).send('Error inserting OTP')
                            return
                        } else {
                            const mailData = {
                                from: process.env.EMAIL,
                                to: user.email,
                                subject: 'Your CALASCHEDULE OTP Code for Account Verification',
                                text: `Dear ${user.name},\n\nWelcome to CALASCHEDULE! Your One-Time Password (OTP) for account verification is ${OTP}. This OTP will expire in 10 minutes.\n\nHappy scheduling!\n\nBest regards,\nThe CALASCHEDULE Team`
                            }
                            sendMail(mailData, (error) => {
                                if (error) {
                                    console.error('Error sending email:', error)
                                    res.status(500).send('Error sending email')
                                    return
                                }
                                res.render('otp', { error: false, user: user, newId: newId })
                                setTimeout(() => {
                                    let sql = 'SELECT otpcode FROM otp WHERE email = ?'
                                    connection.query(sql, [user.email], (error, results) => {
                                        if (results[0].used === 'false') {
                                            const updateSql = 'UPDATE otp SET used = "true" WHERE otpcode = ?'
                                            connection.query(updateSql, [OTP], (updateError, updateResults) => {
                                                if (updateError) {
                                                    console.error('Error updating OTP status:', updateError)
                                                } else {
                                                    console.log('OTP status updated to true', updateResults)
                                                }
                                            })
                                        } else {
                                            console.log('OTP already used')
                                        }
                                    })
                                }, 10 * 60 * 1000)
                            })
                        }
                    })
                }
            }
        } catch (error) {
            console.error('Error in signup:', error)
            res.status(500).send('Error in signup')
        }
    } else {
        let message = 'Passwords do not match!'
        user.confirmpassword = ''
        res.render('signup', { error: true, message: message, user: user })
    }
})

// Route to handle OTP verification
app.post('/verify-otp', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        department: req.body.department,
        id: req.body.id,
        otp: req.body.otp
    }

    let sqlSelect = 'SELECT * FROM otp WHERE email = ? AND used = "false"'
    connection.query(sqlSelect, [user.email], async (error, otpresults) => {
        try {
            if (error) {
                console.error('Error verifying OTP:', error)
                res.status(500).send('Error verifying OTP')
                return
            }
            if (otpresults[0].otpcode === user.otp) {
                console.log('OTP verified')
                let sqlInsert = 'INSERT INTO user (name, email, password, user_id, dpt_code) VALUES (?, ?, ?, ?, ?)'
                const hash = await bcrypt.hash(user.password, 10)
                connection.query(sqlInsert, [user.name, user.email, hash, user.id, user.department], async (error, results) => {
                    if (error) {
                        console.error('Error inserting user:', error)
                        res.status(500).send('Error inserting user')
                        return
                    }
                    console.log('User inserted:', user.department)
                    let sqlUpdate = 'UPDATE otp SET used = "true" WHERE otpcode = ?'
                    connection.query(sqlUpdate, [user.otp], async (error, results) => {
                        if (error) {
                            console.error('Error updating OTP:', error)
                            res.status(500).send('Error updating OTP')
                            return
                        }
                        const mailData = {
                            from: process.env.EMAIL,
                            to: user.email,
                            subject: 'Welcome to CALASCHEDULE - Account Created',
                            text: `Dear ${user.name},\n\nWelcome to CALASCHEDULE! Your account has been successfully created. Start managing your class schedules and stay updated with any changes directly from your lecturers.\n\nIf you have any questions or need assistance, feel free to reach out to our support team.\n\nHappy scheduling!\n\nBest regards,\nThe CALASCHEDULE Team`
                        }
                        sendMail(mailData, (error) => {
                            if (error) {
                                console.error('Error sending email:', error)
                                res.status(500).send('Error sending email')
                                return
                            }
                            let userenrollments = 'INSERT INTO enrollments (isactive, course_id, student_id) SELECT 0, course_id, ? FROM courses WHERE dpt_code = ?'
                            connection.query(userenrollments, [user.id, user.department], (error, results) => {
                                if (error) {
                                    console.error('Error inserting user enrollments:', error)
                                    res.status(500).send('Error inserting user enrollments')
                                    return
                                }
                                req.session.user_id = user.id
                                req.session.dpt = user.department
                                req.session.username = user.name.split(' ')[0]
                                req.session.student = true
                                res.redirect('/dashboard')
                            })
                        })
                    })
                })
            } else {
                let message = 'Invalid OTP!'
                res.render('otp', { error: true, message: message, user: user, newId: user.id })
            }
        } catch (error) {
            console.error('Error in OTP verification:', error)
            res.status(500).send('Error in OTP verification')
        }
    })
})

// Route to render the login page
app.get('/login', (req, res) => {
    const user = {
        email: '',
        password: ''
    }
    res.render('login', { error: false, success: false, user: user })
})

// Route to handle login form submission
app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    let sql = 'SELECT * FROM user WHERE email = ?'
    connection.query(sql, [user.email], async (error, dbuser) => {
        try {
            if (error) {
                console.error('Error querying user:', error)
                res.status(500).send('Error querying user')
                return
            }
            if (dbuser.length > 0) {
                const passwordMatches = await bcrypt.compare(user.password, dbuser[0].password)
                if (passwordMatches) {
                    req.session.user_id =dbuser[0].user_id
                    req.session.dpt =dbuser[0].dpt_code
                    req.session.username =dbuser[0].name.split(' ')[0]
                    if (dbuser[0].role === 1) {
                        req.session.lecturer = true
                        res.redirect('/tutor-dash')
                    } else if (dbuser[0].role === 2) {
                        req.session.admin = true
                        res.redirect('/tutor-dash')
                    } else {
                        req.session.student = true
                        res.redirect('/dashboard')
                    }
                } else {
                    let message = 'Incorrect password!'
                    res.render('login', { error: true,success: false,  message: message, user: user })
                }
            } else {
                let message = 'Account does not exist. Please create one'
                res.render('login', { error: true, success: false, message: message, user: user })
            }
        } catch (error) {
            console.error('Error in login:', error)
            res.status(500).send('Error in login')
        }
    })
})

app.get('/dashboard', (req, res) => {
    if (req.session.user_id) {
        let coursesSQL = 'SELECT c.course_code, c.name AS course_title, u.name AS lecturer_name, u.profilepicture AS lecturer_profilepicture, e.isactive FROM courses c JOIN user u ON c.lecturer_id = u.user_id JOIN enrollments e ON c.course_id = e.course_id JOIN departments d ON c.dpt_code = d.dpt_code WHERE e.student_id = ? AND c.dpt_code = (SELECT dpt_code FROM user WHERE user_id = ?)'
        connection.query(
            coursesSQL,[req.session.user_id, req.session.user_id], (error, courses) => {
                if (error) {
                    console.error('Error querying courses:', error)
                    res.status(500).send('Error querying courses')
                    return
                }
                let daysSQL = 'SELECT * FROM days'
                connection.query(
                    daysSQL, (error, days) => {
                        if (error) {
                            console.error('Error querying days:', error)
                            res.status(500).send('Error querying days')
                            return
                        }
                        let roomsSQL = 'SELECT * FROM rooms'
                        connection.query(
                            roomsSQL, (error, rooms) => {
                                if (error) {
                                    console.error('Error quering rooms:', error)
                                    res.status(500).send('Error quering rooms')
                                    return
                                }
                                let studentClassesSQL = 'SELECT c.course_code, s.start_time, r.name AS venue, s.day_id FROM enrollments e JOIN courses c ON e.course_id = c.course_id JOIN schedules s ON c.course_id = s.course_id JOIN rooms r ON s.room_id = r.room_id WHERE e.student_id = ? AND e.isactive = 1'
                                connection.query(
                                    studentClassesSQL, [req.session.user_id], (error, studentClasses) => {
                                        if (error) {
                                            console.error('Error quering rooms:', error)
                                            res.status(500).send('Error quering rooms')
                                            return
                                        }
                                        res.render('dashboard', {rooms, days, courses, studentClasses})
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.get('/courses', (req, res) => {
    if (req.session.user_id) {
        let coursesSQL = 'SELECT c.course_code, c.name AS course_title, u.name AS lecturer_name, u.profilepicture AS lecturer_profilepicture, e.isactive FROM courses c JOIN user u ON c.lecturer_id = u.user_id JOIN enrollments e ON c.course_id = e.course_id JOIN departments d ON c.dpt_code = d.dpt_code WHERE e.student_id = ? AND c.dpt_code = (SELECT dpt_code FROM user WHERE user_id = ?)'
        connection.query(
            coursesSQL, [req.session.user_id, req.session.user_id], (error, courses) => {
                if (error) {
                    console.error('Error querying courses:', error)
                    res.status(500).send('Error querying courses')
                    return
                }
                res.render('courses', {courses: courses})
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.get('/enroll', (req, res) => {
    if (req.session.user_id) {
        let coursesSQL = ` SELECT  c.course_id,  c.course_code,  c.name AS course_name,  u.name AS lecturer_name,  u.profilepicture AS lecturer_profilepicture  FROM  courses c  JOIN user u ON c.lecturer_id = u.user_id  WHERE  c.course_id NOT IN ( SELECT course_id  FROM enrollments  WHERE student_id = ?  AND isactive = 1 ) AND c.dpt_code = ?`
        connection.query(
            coursesSQL, [req.session.user_id, req.session.dpt], (error, courses) => {
                if (error) {
                    console.error('Error querying courses:', error)
                    res.status(500).send('Error querying courses')
                    return
                }
                res.render('enroll', {courses: courses})
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.post('/enroll', (req, res) => {
    if (req.session.user_id) {
        let student_id = req.session.user_id
        let courses = req.body.courses
        if (!Array.isArray(courses)) {
            courses = [courses];
        }
        let enrollmentSQL = 'INSERT INTO enrollments (course_id, student_id) VALUES (?, ?)'
        let updateenrollmentSQL = 'UPDATE enrollments SET isactive = 1 WHERE course_id = ? AND student_id = ?'
        let checkIfEnrolled = 'SELECT * FROM enrollments WHERE student_id = ? AND course_id = ?'
        courses.forEach(course => {
            connection.query(
                checkIfEnrolled, 
                [student_id, course], 
                (error, results) => {
                    if (results.length > 0) {
                        connection.query(
                            updateenrollmentSQL, 
                            [course, student_id], 
                            (error, results) => {
                                if (error) {
                                    console.error('Error enrolling student:', error)
                                    return res.status(500).send('Error enrolling student')
                                }
                            }
                        )
                    } else {
                        connection.query(
                            enrollmentSQL, 
                            [course, student_id], 
                            (error, results) => {
                                if (error) {
                                    console.error('Error enrolling student:', error)
                                    return res.status(500).send('Error enrolling student')
                                }
                            }
                        )
                    }
                }
            )
        })
        res.redirect('/courses')
    } else {
        res.redirect('/login')
    }
})


app.get('/unenroll', (req, res) => {
    if (req.session.user_id) {
        let coursesSQL = ` SELECT  c.course_id,  c.course_code,  c.name AS course_name,  u.name AS lecturer_name,  u.profilepicture AS lecturer_profilepicture  FROM  courses c  JOIN user u ON c.lecturer_id = u.user_id  WHERE  c.course_id NOT IN ( SELECT course_id  FROM enrollments  WHERE student_id = ?  AND isactive = 0 ) AND c.dpt_code = ?`
        connection.query(
            coursesSQL, [req.session.user_id, req.session.dpt], (error, courses) => {
                if (error) {
                    console.error('Error querying courses:', error)
                    res.status(500).send('Error querying courses')
                    return
                }
                res.render('unenroll', {courses: courses})
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.post('/unenroll', (req, res) => {
    if (req.session.user_id) {
        let student_id = req.session.user_id
        let courses = req.body.courses
        let unenrollmentSQL = 'UPDATE enrollments SET isactive = 0 WHERE course_id = ? AND student_id = ?'
        if (!Array.isArray(courses)) {
            courses = [courses];
        }
        courses.forEach(course => {
            connection.query(unenrollmentSQL, [course, student_id], (error, results) => {
                if (error) {
                    console.error('Error unenrolling student:', error)
                    return res.status(500).send('Error unenrolling student')
                }
            })
        })
        res.redirect('/courses')
    } else {
        res.redirect('/login')
    }
})

app.get('/profile', (req, res) => {
    if (req.session.user_id) {
        let userSQL = 'SELECT * FROM user WHERE user_id = ?'
        connection.query(
            userSQL, [req.session.user_id], (error, user) => {
                if (error) {
                    console.error('Error querying user:', error)
                    res.status(500).send('Error querying user')
                    return
                }
                res.render('profile', {user: user[0]})
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.get('/edit-profile', (req, res) => {
    if (req.session.user_id) {
        let userSQL = 'SELECT * FROM user WHERE user_id = ?'
        connection.query(
            userSQL, [req.session.user_id], (error, user) => {
                if (error) {
                    console.error('Error querying user:', error)
                    res.status(500).send('Error querying user')
                    return
                }
                res.render('edit-profile', {user: user[0]})
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.post('/edit-profile', uploadprofilePicture.single('profilepicture'), (req, res) => {
    if (req.session.user_id) {
        let user = {
            name: req.body.name,
            profilepicture: req.file ? req.file.filename : req.body.ifnoprofilepic
        }        
        let userSQL = 'UPDATE user SET name = ?, profilepicture = ? WHERE user_id = ?'
        connection.query(
            userSQL, [user.name, user.profilepicture, req.session.user_id], (error, results) => {
                if (error) {
                    console.error('Error updating user:', error)
                    res.status(500).send('Error updating user')
                    return
                }
                res.redirect('/profile')
            }
        )
    } else {
        res.redirect('/login')
    }
})

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password', {error: false, success: false, otpinput: false})
})

app.post('/forgot-password', (req, res) => {
    let email = req.body.email
    let sql = 'SELECT * FROM user WHERE email = ?'
    connection.query(sql, [email], async (error, results) => {
        if (error) {
            console.error('Error querying user:', error)
            res.status(500).send('Error querying user')
            return
        }
        if (results.length > 0) {
            let OTP = generateotp()
            let otpsql = 'SELECT * FROM otp WHERE otpcode = ?'
            do {
                OTP = generateotp()
            } while (await checkIfIdExists(OTP, otpsql))
            req.session.otp = OTP
            let sqlotp3 = 'SELECT * FROM otp WHERE email = ? AND used = "false"'
            const otpResults = await checkIfIdExists(email, sqlotp3)
            if (otpResults.length > 0) {
                let message = 'An OTP has already been sent to your email. Please check your email and enter the OTP to reset your password.'
                res.render('forgot-password', {error: true, success: false, message: message, otpinput: true, email: email})
            } else {
                let otpsql2 = 'INSERT INTO otp (otpcode, email) VALUES (?, ?)'
                connection.query(otpsql2, [OTP, email], async (error, results) => {
                    if (error) {
                        console.error('Error inserting OTP:', error)
                        res.status(500).send('Error inserting OTP')
                        return
                    } else {
                        const mailData = {
                            from: process.env.EMAIL,
                            to: email,
                            subject: 'Your CALASCHEDULE OTP Code for Password Reset',
                            text: `Dear User,\n\nYou have requested to reset your password on CALASCHEDULE. Your One-Time Password (OTP) for password reset is ${OTP}. This OTP will expire in 10 minutes.\n\nHappy scheduling!\n\nBest regards,\nThe CALASCHEDULE Team`
                        }
                        sendMail(mailData, (error) => {
                            if (error) {
                                console.error('Error sending email:', error)
                                res.status(500).send('Error sending email')
                                return
                            }
                        })
                        console.log('OTP sent:', OTP, email)
                        let message = 'An OTP has been sent to your email. Please check your email and enter the OTP below to reset your password.'
                        res.render('forgot-password', {error: false, success: true, message: message, otpinput: true, email: email})
                        console.log('OTP:', OTP, email)
                        setTimeout(() => {
                            let sql = 'SELECT otpcode FROM otp WHERE email = ?'
                            connection.query(sql, [email], (error, results) => {
                                if (results[0].used === 'false') {
                                    const updateSql = 'UPDATE otp SET used = "true" WHERE otpcode = ?'
                                    connection.query(updateSql, [OTP], (updateError, updateResults) => {
                                        if (updateError) {
                                            console.error('Error updating OTP status:', updateError)
                                        } else {
                                            console.log('OTP status updated to true', updateResults)
                                        }
                                    })
                                } else {
                                    console.log('OTP already used')
                                }
                            })
                        }, 10 * 60 * 1000)
                    }
                })
            }
        } else {
            let message = 'Account does not exist. Please create one'
            res.render('forgot-password', {error: true, success: false, message: message, otpinput: false})
        }
    })
})

app.post('/verify-otp-forgot-password', (req, res) => {
    let email = req.body.email
    let otp = req.body.otp
    let sqlSelect = 'SELECT * FROM otp WHERE otpcode = ? AND used = "false"'
    connection.query(sqlSelect, [otp], async (error, otpresults) => {
        try {
            if (error) {
                console.error('Error verifying OTP:', error)
                res.status(500).send('Error verifying OTP')
                return
            }
            if (otpresults[0].otpcode === otp) {
                let message = 'OTP verified! You can now reset your password.'
                let updateSql = 'UPDATE otp SET used = "true" WHERE otpcode = ?'
                connection.query(updateSql, [otp], (error, results) => {
                    if (error) {
                        console.error('Error updating OTP:', error)
                        res.status(500).send('Error updating OTP')
                        return
                    }
                    res.render('reset-password', {error: false, success: true, message: message, email: email})
                })
            } else {
                let message = 'Invalid OTP!'
                res.render('forgot-password', {error: true, success: false, message: message, otpinput: true, email: email})
            }
        } catch (error) {
            console.error('Error in OTP verification:', error)
            res.status(500).send('Error in OTP verification')
        }
    })
})

app.post('/reset-password', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let confirmpassword = req.body.confirmpassword
    if (password === confirmpassword) {
        let hash = bcrypt.hashSync(password, 10)
        let sql = 'UPDATE user SET password = ? WHERE email = ?'
        connection.query(sql, [hash, email], (error, results) => {
            if (error) {
                console.error('Error updating password:', error)
                res.status(500).send('Error updating password')
                return
            }
            let message = 'Password reset successful! You can now login with your new password.'
            res.render('login', {error: false, success: true, message: message, user: {email: email, password: password}})
        })
    } else {
        let message = 'Passwords do not match!'
        res.render('forgot-password', {error: true, success: false, message: message, otpinput: true, email: email})
    }
})

app.get('/admin', (req, res) => {
    if (req.session.user_id) {
        
    } else {
        res.redirect('/login')
    }
})

app.get('/tutor-dash', (req, res) => {
    if (req.session.user_id) {
        let myClasses = 'SELECT c.course_id, c.course_code, c.name AS course_name, u.user_id AS tutor_id, u.name AS tutor_name, d.dpt_name AS department_name, s.schedule_id, s.day_id, days.name AS day_name, s.start_time, s.end_time, s.room_id, rooms.name AS room_name FROM courses c JOIN user u ON c.lecturer_id = u.user_id JOIN departments d ON c.dpt_code = d.dpt_code JOIN schedules s ON c.course_id = s.course_id JOIN days ON s.day_id = days.day_id JOIN rooms ON s.room_id = rooms.room_id WHERE u.user_id = ?;'
        connection.query(myClasses, [req.session.user_id], (error, classes) => {
            if (error) {
                console.error('Error querying classes:', error)
                res.status(500).send('Error querying classes')
                return
            }
            res.render('tutor-dash', {classes: classes})
        })
    } else {
        res.redirect('/login')
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

const PORT = process.env.PORT || 3800
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
