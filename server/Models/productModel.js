const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price : {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  productQuantity: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Product = mongoose.model('Product', productSchema)


module.exports = Product