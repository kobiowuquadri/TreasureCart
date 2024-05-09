const express = require('express')
const subadminRouter = express.Router()
const subadminLogin = require('../Controllers/subadminController')

subadminRouter.post('/subadmin-login', subadminLogin)


module.exports = subadminRouter