const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../Models/userModels')
const { isEmail } = require('validator');
const sendEmail = require('../sendEmail/sendEmail')



const handleErrors = (error, res) => {
    if (error instanceof mongoose.Error.ValidationError) {
        // Handle Mongoose validation errors
        const validationErrors = Object.values(error.errors).map((err) => err.message);
        console.error('Validation Errors:', validationErrors);
        // You can customize the response based on your needs
        return res.status(400).json({ error: 'Validation failed', details: validationErrors });
    } else {
        // Handle other types of errors
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

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
    
    const subject = 'Welcome to Treasure Cart';
    const text = 'Thank you for registering!';
    const html = '<h1>Welcome to YourApp!</h1>';
    
    await sendEmail(email, subject, text, html);


    await newUser.save ()
    res.status(201).json({ message: 'User Created Successfully' });


 } catch (error) {
    // handleErrors(err)
    // console.error(error)
    // res.status(500).json({error: 'Internal server serror'})
    handleErrors(error, res);

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