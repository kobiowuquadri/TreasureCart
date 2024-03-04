// User Routes
const express = require('express')
const userRouter = express.Router()
const {registerUser, updateUser, allUsers } = require('../Controllers/userController')
userRouter.post('/register', registerUser)
userRouter.put ('/update/:id', updateUser)
userRouter.get ('/allusers', allUsers)


module.exports = userRouter
