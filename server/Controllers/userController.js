const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../Models/userModels')
const { isEmail } = require('validator');
const jwt = require('jsonwebtoken');

const period = 1000 * 60 * 60 * 24 * 3


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
const generateUserId = require('../Utils/userIdGenerator')

const registerUser = async (req, res) => {
const {surname, firstname, othername, email,password,phoneNumber} = req.body
 try {
    const hashPassword = await bcrypt.hash(password, 10);
    const generateId = generateUserId()
    const newUser = User({
        surname,
        firstname,
        othername,
        email,
        password: hashPassword,
        phoneNumber,
        userId: generateId
    })
    
    const savedUser = await newUser.save ()
    res.status(201).json({ message: 'User Created Successfully', savedUser });


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

const uploadImage =  (req, res) => {
    try{
        res.json(req.file)
    }
    catch(err){
        console.log(err.message)
    }
}


const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        const checkUser = await User.findOne({ email})
    
        if(!checkUser){
            return res.status(404).json({success: false, message: "user not found"})
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if (!checkPassword) {
            return res.status(401).json({ success: false, message:"Invalid Password"});
        }
    
        // if the email and password is correct, generate a token to the server side
        // const token = jwt.sign(
        //     { id: checkUser._id },
        //     process.env.SECRET,
        //     { expiresIn: '1d' } 
        //   );
        jwt.sign({id: checkUser._id}, process.env.SECRET, {expiresIn: '1hr'}, async (err, token) => {
            if (err){
                throw err ;
            }
            res.cookie('userId', checkUser._id, { maxAge: period, httpOnly: true })
            res.status(200).json({
              success: true,
              message: 'User Login Successfully',
              checkUser,
              token
            })
     
            
        });

    } 
              
        
        catch (err) {
            console.log(err.message);
            return res.status(500).json({ success: false, message:"error from the server"});
          }
        // add logic to authenticate user, and save the token inside a cookie for authorization
        // Mr Yusuf
    }

module.exports = {registerUser, uploadImage, loginUser};