const express = require('express')
const adminRouter = express.Router()

const upload = require('../Middlewares/uploadImage')

const {
  adminLogin,
  adminRegister,
  adminCreateSubAdmin,
  adminUpdateUserProfile,
  allUser,
  allSubadmin,
  adminDeleteUserProfile,
  uploadProduct
} = require('../Controllers/adminController')

const verifyAdmin = require('../Middlewares/verifyAdmin')

adminRouter.post('/admin-register', adminRegister)
adminRouter.post('/subadmin-register', verifyAdmin, adminCreateSubAdmin)
adminRouter.post('/admin-login', adminLogin)
adminRouter.put(
  '/admin/update-user/:userId',
  verifyAdmin,
  adminUpdateUserProfile
)

adminRouter.get('/allSubAdim', verifyAdmin, allSubadmin)
adminRouter.get('/allUser', verifyAdmin, allUser)

adminRouter.delete(
  '/admin/delete-user/:userId',
  verifyAdmin,
  adminDeleteUserProfile
)


adminRouter.post('/upload-product', verifyAdmin, upload.single('productImage'), uploadProduct)

module.exports = adminRouter
