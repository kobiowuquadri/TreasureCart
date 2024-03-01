const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Admin = require('../Models/adminModel')


const adminRegister = async (req, res) => {
    try{
        const { email, password, username} = req.body
        const existingAdmin = await Admin.findOne({ email})
        if(existingAdmin){
            return res.status(404).json({ success: false,  message: 'Admin already Registered' })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newAdmin = Admin({
            email,
            password : hashPassword,
            username
        })
        const savedAdmin = await newAdmin.save()
        res.status(200).json({ success: true, message: 'Admin created', savedAdmin })
    }
    catch(err){
        console.log(err.message)
    }
     
}

module.exports = adminRegister