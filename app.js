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

app.use((req, res, next) => {
    res.locals.username = req.session.username !== undefined ? req.session.username : 'Guest'
    res.locals.isLoggedIn = req.session.userID !== undefined
    res.locals.userID = req.session.userID
    res.locals.tutor = req.session.tutor !== undefined ? req.session.tutor : false
    next()
})

function loginRequired(req, res) {
    res.locals.isLoggedIn || res.redirect('/login')
}

function generateid() {
    const characters = '0123456789'
    const genid = Array.from({ length: 3 }, () => characters.charAt(Math.floor(Math.random() * characters.length)))
    return genid.join('')
}

function generatesession() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const genses = Array.from({ length: 10 }, () => characters.charAt(Math.floor(Math.random() * characters.length)))
    return genses.join('')
}

function generateotp() {
    const characters = '1234567890'
    const OTP = Array.from({ length: 4 }, () => characters.charAt(Math.floor(Math.random() * characters.length)))
    return OTP.join('')
}

function checkIfIdExists(id, sql) {
    connection.query(sql, [id], (error, results) => {
        if (results.length > 0) {
            return true
        } else {
            return false
        }
    })
}

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

const sendMail = (data) => {
    const transporter = nodemailer.createTransport(config)
    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

app.get('/', (req, res) => {
    if (req.session.modesession) {
        res.render('index')
        return
    }
    let newId = ''
    let sql = 'SELECT * FROM sessions WHERE sessionid = ?'
    do {
        newId = generatesession()
    } while (checkIfIdExists(newId, sql))
    req.session.modesession = newId
    let sqlsession = 'INSERT INTO sessions (sessionid) VALUES (?)'
    connection.query(sqlsession, [newId], (error, results) => {
        res.render('index')
    })
})

app.get('/signup', (req, res) => {
    const user = {
        name: 'Sharon Oyakhilome',
        email: 'sharon@gmail',
        password: '21',
        confirmpassword: '21'
    }
    res.render('signup', { error: false, user: user })
})

app.post('/signup', async(req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    }
    if (user.password === user.confirmpassword) {
        let sql = 'SELECT * FROM user WHERE email = ?'
        connection.query(sql, [user.email], (error, results) => {
            if (results.length > 0) {
                let message = 'An account exists with that email number!'
                user.email = ''
                res.render('signup', { error: true, message: message, user: user })
            } else {
                let newId = ''
                let sql = 'SELECT * FROM user WHERE user_id = ?'
                do {
                    newId = generateid()
                } while (checkIfIdExists(newId, sql))

                let OTP = generateotp()
                let otpsql = 'SELECT * FROM otp WHERE otpcode = ?'
                do {
                    OTP = generateotp()
                } while (checkIfIdExists(OTP, otpsql))
                req.session.otp = OTP
                let sqlotp3 = 'SELECT * FROM otp WHERE email = ?'
                connection.query(sqlotp3, [user.email], (error, results) => {
                    if (results.length > 0) {
                        let message = 'An OTP has already been sent to your email. Please check your email and enter the OTP to verify your account.'
                        res.render('otp', { error: true, message: message, user: user, newId: newId})
                    } else {
                        let otpsql2 = 'INSERT INTO otp (otpcode, email) VALUES (?, ?)'

                        connection.query(otpsql2, [OTP, user.email], (error, results) => {
                            if (error) {
                                console.error('Error inserting OTP:', error)
                            } else {
                                const mailData = {
                                    from: process.env.EMAIL,
                                    to: user.email,
                                    subject: 'Welcome to CALAFILES - Your Personalized Learning Platform',
                                    text: `Dear ${user.name},\n\nWelcome to CALAFILES! Your One-Time Password (OTP) for account verification is ${OTP}. This OTP will expire in 10 minutes.\n\nHappy learning!\n\nBest regards,\nThe CALAFILES Team`
                                }
                                sendMail(mailData)
                                console.log('OTP inserted')
                                res.render('otp', { error: false, user: user, newId: newId})
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
                            }
                        })
                    }
                })
            }
        })
    } else {
        let message = 'Passwords don\'t match!'
        user.confirmpassword = ''
        res.render('signup', { error: true, message: message, user: user })
    }
})

app.post('/verify-otp', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        id: req.body.id,
        otp: req.body.otp
    }
    let sqlSelect = 'SELECT * FROM otp WHERE otpcode = ? AND used = "false"'
    connection.query(sqlSelect, [user.otp], (error, results) => {
        if (results.length > 0) {
            let sqlInsert = 'INSERT INTO user (name, email, password, user_id) VALUES (?, ?, ?, ?)'
            bcrypt.hash(user.password, 10, (err, hash) => {
                connection.query(sqlInsert, [user.name, user.email, hash, user.id], (error, results) => {
                    if (error) {
                        console.error('Error inserting user:', error)
                        return res.status(500).send('Error inserting user')
                    }
                    let sqlUpdate = 'UPDATE otp SET used = "true" WHERE otpcode = ?'
                    connection.query(sqlUpdate, [user.otp], (error, results) => {
                        if (error) {
                            console.error('Error updating OTP:', error)
                            return res.status(500).send('Error updating OTP')
                        }
                        const mailData = {
                            from: process.env.EMAIL,
                            to: user.email,
                            subject: 'Welcome to CALAFILES - Your Personalized Learning Platform',
                            text: `Dear ${user.name},\n\nWelcome to CALAFILES! Your account has been successfully created. Start your personalized learning journey today.\n\nIf you have any questions or need assistance, feel free to reach out to our support team.\n\nHappy learning!\n\nBest regards,\nThe CALAFILES Team`
                        }
                        sendMail(mailData)
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
    })
})

app.get('/login', (req, res) => {
    const user = {
        email: '',
        password: ''
    }
    res.render('login', { error: false, user: user })
})

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    let sql = 'SELECT * FROM user WHERE email = ?'
    connection.query(sql, [user.email], (error, results) => {
        if (results.length > 0) {
            bcrypt.compare(user.password, results[0].password, (error, passwordMatches) => {
                if (passwordMatches) {
                    req.session.userID = results[0].id
                    req.session.username = results[0].name.split(' ')[0]
                    res.redirect('/dashboard')
                } else {
                    let message = 'Incorrect password!'
                    res.render('login', { error: true, message: message, user: user })
                }
            })
        } else {
            let message = 'Account does not exist. Please create one'
            res.render('login', { error: true, message: message, user: user })
        }
    })
})

app.get('/dashboard', (req, res) => {
    loginRequired(req, res)
    res.render('dashboard')
})

app.get('/logout', (req, res) => {
    loginRequired(req, res)
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

const PORT = process.env.PORT || 3800
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
