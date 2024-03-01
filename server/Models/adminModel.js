const mongoose = require('mongoose')


const adminSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    adminId : {
        type : String,
    },
    username : {
        type : String,
        required : true
    }
}, {timestamps : true})

const Admin = mongoose.model( 'adminModel', adminSchema)

module.exports = Admin