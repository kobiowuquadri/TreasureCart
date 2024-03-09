const express = require('express')
const adminRouter = express.Router()
const {adminLogin, adminRegister, subadminRegister, updateProfileByAdmin, deleteProfileByAdmin} = require('../Controllers/adminController')
const adminController = require('../Controllers/adminController')
const verifyAdmin = require('../Middlewares/verifyAdmin')

adminRouter.post('/admin-register', adminRegister)
adminRouter.post('/subadmin-register', subadminRegister)
adminRouter.post('/admin-login', adminLogin)
adminRouter.put('/admin/update-user/:userId', verifyAdmin, updateProfileByAdmin);
adminRouter.delete('/admin/delete-user/:userId', verifyAdmin, deleteProfileByAdmin);



module.exports = adminRouter