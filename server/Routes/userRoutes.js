// User Routes
const express = require('express')
const userRouter = express.Router()
const {registerUser, updateUser, allUsers,loginUser, uploadImage } = require('../Controllers/userController')
const {adminLogin, adminRegister} = require('../Controllers/adminController')
const verifyUser = require('../Middlewares/verifyUser')

userRouter.post('/user-register', registerUser)
userRouter.post('/user-login', loginUser)
userRouter.put('/user-update/:id', verifyUser, updateUser)





module.exports = userRouter
