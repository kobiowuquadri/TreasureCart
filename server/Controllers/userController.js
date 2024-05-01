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

const updateUser = async (req, res) => {
  try {
    const id = req.params.id
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.status(200).json({
      success: true,
      message: 'profile updated successfully',
      updatedUser
    })
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = { registerUser, loginUser, updateUser }
