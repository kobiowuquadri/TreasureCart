// User Routes
const express = require('express')
const userRouter = express.Router()
const {registerUser, uploadImage} = require('../Controllers/userController')
const upload = require('../Middlewares/uploadImage')

userRouter.post('/api/upload', upload.single('file'), uploadImage)
userRouter.post('/register', registerUser)

module.exports = userRouter
