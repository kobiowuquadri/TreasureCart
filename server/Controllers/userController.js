const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { User, passwordValidator } = require('../Models/userModels')
const jwt = require('jsonwebtoken')
const sendEmail = require('../sendEmail/sendEmail')


const period = 1000 * 60 * 60 * 24 * 3

const handleErrors = (error, res) => {
  if (error instanceof mongoose.Error.ValidationError) {
    const validationErrors = Object.values(error.errors).map(err => err.message)
    console.error('Validation Errors:', validationErrors)
    return res
      .status(400)
      .json({ error: 'Validation failed', details: validationErrors })
  } else {
    console.error(error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
const generateUserId = require('../Utils/userIdGenerator')

const registerUser = async (req, res) => {
  try {
    const { surname, firstname, othername, email, password, phoneNumber } =
      req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already exists.' })
    }
    if (!passwordValidator(password)) {
      return res.status(400).json({
        success: false,
        message:
          'Password must contain at least one lowercase letter, one uppercase letter, one digit, one symbol (@#$%^&*!), and have a minimum length of 8 characters'
      })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const generateId = generateUserId()
    const newUser = User({
      surname,
      firstname,
      othername,
      email,
      password: hashPassword,
      phoneNumber,
      userId: generateId
    })

    const subject = 'Welcome to Treasure Cart'
    const text = 'Thank you for registering with Treasure Cart!'
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Treasure Cart</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    margin-bottom: 20px;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Treasure Cart!</h1>
                <p>Thank you for registering with Treasure Cart. We're excited to have you join our community!</p>
                <p>At Treasure Cart, we strive to provide you with a seamless shopping experience. Discover a wide range of products, enjoy exclusive deals, and shop with confidence knowing that we're here to assist you every step of the way.</p>
                <p>Happy shopping!</p>
            </div>
            <div class="footer">
                <p>© 2024 Treasure Cart. All rights reserved.</p>
            </div>
        </body>
        </html>
    `

    const savedUser = await newUser.save()
    await sendEmail(email, subject, text, html)
    res
      .status(201)
      .json({ success: true, message: 'User Created Successfully', savedUser })
  } catch (error) {
    handleErrors(error, res)
  }
}

const uploadImage = (req, res) => {
  try {
    res.json(req.file)
  } catch (err) {
    console.log(err.message)
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const checkUser = await User.findOne({ email })

    if (!checkUser) {
      return res.status(404).json({ success: false, message: 'user not found' })
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password)
    if (!checkPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid Password' })
    }
    jwt.sign(
      { id: checkUser._id },
      process.env.SECRET,
      { expiresIn: '1hr' },
      async (err, token) => {
        if (err) {
          throw err
        }
        res.cookie('userId', checkUser._id, { maxAge: period, httpOnly: true })
        res.status(200).json({
          success: true,
          message: 'User Login Successfully',
          checkUser,
          token
        })
      }
    )
  } catch (err) {
    console.log(err.message)
    return res
      .status(500)
      .json({ success: false, message: 'error from the server' })
  }
}

module.exports = { registerUser, uploadImage, loginUser }
