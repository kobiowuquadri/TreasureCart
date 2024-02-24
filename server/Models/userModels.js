const mongoose = require('mongoose');
const { isEmail } = require('validator');


const passwordValidator = (value) => {

    const criteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    console.log('Password to Validate:', value);
    const isValid = criteria.test(value);
    console.log('Password Validation Result:', isValid);
    return isValid;
};

const userSchema = new mongoose.Schema({
    surname : {
        type: String,
        required: [true, "Please enter your surname"]
    },
    firstname: {
        type: String,
        required: [true, "Please enter your first name"]
    },
    othername: {
        type: String
    },
    email : {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please enter your email address"],
        validate: [ isEmail, 'please enter a valid email']        // Add validate email
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        validate: [ passwordValidator,'Password must meet the criteria' ]   
        
        //criteria: atleast/ one lower casee, one uppercase, one digit, one symbol,total length of 8
        // Add validator, to validate the password, (max length of 8 charcaters,  at least one upper case letter, one lower case letter and one number, at least one symbol (@#$%) )
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please enter your phone number"]
        // Add validate phone number
    },
    userId: {
        type : String
    },
    products: [
        {
            productId: {
                type: String,
                id: mongoose.Types.ObjectId
            },
            productName: {
                type: String,
            },
            productCategory: {
                type: String
            }

        }
    ],
    userImage: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model("usermodel", userSchema)

module.exports = User


// Mr Demilade