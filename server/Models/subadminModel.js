const mongoose = require('mongoose');

const subadminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminId : {
        type : String,
    },
    username : {
        type : String,
        required : true
    }

},{timestamps : true})

const subAdmin = mongoose.model('subadminmodel', subadminSchema);

module.exports = subAdmin;