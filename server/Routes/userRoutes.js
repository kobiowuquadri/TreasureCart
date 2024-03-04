// User Routes
const express = require('express')
const userRouter = express.Router()
const {registerUser, uploadImage, loginUser} = require('../Controllers/userController')
const {adminLogin, adminRegister} = require('../Controllers/adminController')
const upload = require('../Middlewares/uploadImage')

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/api/upload', upload.single('file'), uploadImage)
userRouter.post('/adminregister', adminRegister)
userRouter.post('/adminlogin', adminLogin)

module.exports = userRouter
