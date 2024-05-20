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

const uploadProfilePicture = multer({ storage: profilepicture })

// Middleware to set locals
app.use((req, res, next) => {
    res.locals.username = req.session.username !== undefined ? req.session.username : 'Guest'
    res.locals.isLoggedIn = req.session.userID !== undefined
    res.locals.userID = req.session.userID
    res.locals.tutor = req.session.tutor !== undefined ? req.session.tutor : false
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
    res.render('index')
})

// Route to handle signup page rendering
app.get('/signup', (req, res) => {
    const user = {
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    }
    res.render('signup', { error: false, user: user })
})

// Route to handle signup form submission
app.post('/signup', async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
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
                                subject: 'Welcome to CALAFILES - Your Personalized Learning Platform',
                                text: `Dear ${user.name},\n\nWelcome to CALAFILES! Your One-Time Password (OTP) for account verification is ${OTP}. This OTP will expire in 10 minutes.\n\nHappy learning!\n\nBest regards,\nThe CALAFILES Team`
                            }
                            sendMail(mailData, (error) => {
                                if (error) {
                                    console.error('Error sending email:', error)
                                    res.status(500).send('Error sending email')
                                    return
                                }
                                console.log('OTP inserted')
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
                                                    console.log('OTP status updated to true')
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
        id: req.body.id,
        otp: req.body.otp
    }

    let sqlSelect = 'SELECT * FROM otp WHERE otpcode = ? AND used = "false"'
    connection.query(sqlSelect, [user.otp], async (error, results) => {
        try {
            if (error) {
                console.error('Error verifying OTP:', error)
                res.status(500).send('Error verifying OTP')
                return
            }
            if (results.length > 0) {
                let sqlInsert = 'INSERT INTO user (name, email, password, user_id) VALUES (?, ?, ?, ?)'
                const hash = await bcrypt.hash(user.password, 10)
                connection.query(sqlInsert, [user.name, user.email, hash, user.id], async (error, results) => {
                    if (error) {
                        console.error('Error inserting user:', error)
                        res.status(500).send('Error inserting user')
                        return
                    }
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
                            subject: 'Welcome to CALAFILES - Your Personalized Learning Platform',
                            text: `Dear ${user.name},\n\nWelcome to CALAFILES! Your account has been successfully created. Start your personalized learning journey today.\n\nIf you have any questions or need assistance, feel free to reach out to our support team.\n\nHappy learning!\n\nBest regards,\nThe CALAFILES Team`
                        }
                        sendMail(mailData, (error) => {
                            if (error) {
                                console.error('Error sending email:', error)
                                res.status(500).send('Error sending email')
                                return
                            }
                            req.session.userID = user.id
                            req.session.username = user.name.split(' ')[0]
                            res.redirect('/dashboard')
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
    res.render('login', { error: false, user: user })
})

// Route to handle login form submission
app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    let sql = 'SELECT * FROM user WHERE email = ?'
    connection.query(sql, [user.email], async (error, results) => {
        try {
            if (error) {
                console.error('Error querying user:', error)
                res.status(500).send('Error querying user')
                return
            }
            if (results.length > 0) {
                const passwordMatches = await bcrypt.compare(user.password, results[0].password)
                if (passwordMatches) {
                    req.session.userID = results[0].user_id
                    req.session.username = results[0].name.split(' ')[0]
                    res.redirect('/dashboard')
                } else {
                    let message = 'Incorrect password!'
                    res.render('login', { error: true, message: message, user: user })
                }
            } else {
                let message = 'Account does not exist. Please create one'
                res.render('login', { error: true, message: message, user: user })
            }
        } catch (error) {
            console.error('Error in login:', error)
            res.status(500).send('Error in login')
        }
    })
})

app.get('/dashboard', (req, res) => {
    if (req.session.userID) {
        let coursesSQL = 'SELECT * FROM courses'
        connection.query(coursesSQL, (error, results) => {
            if (error) {
                console.error('Error querying courses:', error)
                res.status(500).send('Error querying courses')
                return
            }
            res.render('dashboard', { courses: results })
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
