// User Routes
const express = require('express')
const userRouter = express.Router()

const {registerUser, updateUser, allUsers,loginUser } = require('../Controllers/userController')
userRouter.post('/register', registerUser)
userRouter.put ('/update/:id', updateUser)
userRouter.get ('/allusers', allUsers)
userRouter.post('/api/upload', upload.single('file'), uploadImage)
userRouter.post('/login', loginUser)
userRouter.post('/adminregister', adminRegister)


module.exports = userRouter
