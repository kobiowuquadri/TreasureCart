const express = require('express')
const adminRouter = express.Router()
const {adminLogin, adminRegister, subadminRegister} = require('../Controllers/adminController')
const subadminLogin = require('../Controllers/subadminController')


adminRouter.post('/admin-register', adminRegister)
adminRouter.post('/subadmin-register', subadminRegister)
adminRouter.post('/admin-login', adminLogin)
adminRouter.post('/subadmin-login', subadminLogin)


module.exports = adminRouter