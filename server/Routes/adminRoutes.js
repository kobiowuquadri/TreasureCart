const express = require('express')
const adminRouter = express.Router()
const {adminLogin, adminRegister} = require('../Controllers/adminController')


adminRouter.post('/admin-register', adminRegister)
adminRouter.post('/admin-login', adminLogin)


module.exports = adminRouter