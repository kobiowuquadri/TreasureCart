const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../Models/userModels')


const registerUser = async (req, res) => {
const {surname, firstname, othername, email,password,phoneNumber} = req.body
 try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = User({
        surname,
        firstname,
        othername,
        email,
        password: hashPassword,
        phoneNumber
    })
    
    await newUser.save ()
    res.status(201).json({ message: 'User Created Successfully' });


 } catch (error) {
    console.error(error)
    res.status(500).json({error: 'Internal server serror'})
 }
    // Add logic to register user and 
    // handle existing user
    // hash password
}


const loginUser = (req, res) => {
    // add logic to authenticate user, and save the token inside a cookie for authorization
    

    // Mr Yusuf
}

module.exports = registerUser