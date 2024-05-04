const mongoose = require("mongoose")

const paystackSchema = mongoose.Schema({
  email : {
     type: String,
     required: true 
  }, 
  amount: {
    type: Number,
    required: true
  },
  url: {
    type: String,    
  }, 
  reference: {
    type: String
  }
})

const Paystack = mongoose.model('Paystack', paystackSchema)

module.exports = Paystack
