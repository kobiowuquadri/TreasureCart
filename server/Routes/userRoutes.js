// User Routes
const express = require('express')
const userRouter = express.Router()

const {registerUser, updateUser, allUsers,loginUser } = require('../Controllers/userController')
userRouter.post('/register', registerUser)
userRouter.put ('/update/:id', updateUser)
userRouter.get ('/allusers', allUsers)
userRouter.post('/login', loginUser)
userRouter.post('/api/upload', upload.single('file'), uploadImage)
userRouter.post('/adminregister', adminRegister)
userRouter.post('/adminlogin', adminLogin)


module.exports = userRouter
