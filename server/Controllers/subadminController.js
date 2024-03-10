const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const subAdmin = require('../Models/subadminModel')



const period= 1000 * 60 * 60 * 24 * 3
const subadminLogin = async (req, res) => {
    
    try{
        const { adminId, password} = req.body
        const subAdmin = await subAdmin.findOne({adminId})

        if (!subAdmin) {
            return res.status(404).json({ success: false, message: 'Admin not found' })
        }
        const isPassword = await bcrypt.compare(password, subAdmin.password)
        if (!isPassword) {
          return res
            .status(401)
            .json({ success: false, message: 'Invalid Password' })
        }

        jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: '1d'}, async (err, token) => {
            if(err) {
                throw err;
            }
            res.cookie('userid', user._id, {maxAge: period, httpOnly: true})
            res.status(200).json({ success: true, message: 'login successful', subAdmin, token })
        })
    }
    catch(err){
        console.log(err.message)
    }
}




module.exports = {subadminLogin}