// User Routes
const express = require('express')
const userRouter = express.Router()
const {registerUser, updateUser, allUsers , loginUser} = require('../Controllers/userController')
userRouter.post('/register', registerUser)

module.exports = userRouter
