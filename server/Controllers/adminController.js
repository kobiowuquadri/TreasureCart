const Admin = require('../Models/adminModel')
const subAdmin = require('../Models/subadminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Product = require('../Models/productModel')
const { User, passwordValidator } = require('../Models/userModels')
const cloudinary = require('../Utils/cloudinary')

const period = 1000 * 60 * 60 * 24 * 3

const adminRegister = async (req, res) => {
  try {
    const { email, password, username } = req.body
    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res
        .status(404)
        .json({ success: false, message: 'Admin already Registered' })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newAdmin = Admin({
      email,
      password: hashPassword,
      username
    })
    const savedAdmin = await newAdmin.save()
    res
      .status(200)
      .json({ success: true, message: 'Admin created', savedAdmin })
  } catch (err) {
    console.log(err.message)
  }
}

const adminCreateSubAdmin = async (req, res) => {
  try {
    const { email, password, username } = req.body
    const existingsubAdmin = await subAdmin.findOne({ email })
    if (existingsubAdmin) {
      return res
        .status(404)
        .json({ success: false, message: 'subAdmin already Registered' })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newsubAdmin = subAdmin({
      email,
      password: hashPassword,
      username
    })
    const savedsubAdmin = await newsubAdmin.save()
    res
      .status(200)
      .json({ success: true, message: 'subAdmin created', savedsubAdmin })
  } catch (err) {
    console.log(err.message)
  }
}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const isAdmin = await Admin.findOne({ email })

    if (!isAdmin) {
      return res
        .status(404)
        .json({ success: false, message: 'Admin not found' })
    }
    const checkAdminPassword = await bcrypt.compare(password, isAdmin.password)
    if (!checkAdminPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid Password' })
    }

    jwt.sign(
      { id: isAdmin._id },
      process.env.SECRET,
      { expiresIn: '1hr' },
      async (err, token) => {
        if (err) {
          throw err
        }
        res.cookie('userId', isAdmin._id, { maxAge: period, httpOnly: true })
        res.status(200).json({
          success: true,
          message: 'Admin Login Successfully',
          isAdmin,
          token
        })
      }
    )
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' })
  }
}

const adminUpdateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true
    })

    res
      .status(200)
      .json({ success: true, message: 'User profile updated', updatedUser })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

const allSubadmin = async (req, res) => {
  try {
    const users = await subAdmin.find()
    res
      .status(202)
      .json({ success: true, message: 'View all subadmin successful', users })
  } catch (err) {
    console.log(err.message)
  }
}

const allUser = async (req, res) => {
  try {
    const users = await User.find()
    res
      .status(202)
      .json({ success: true, message: 'View all users Successful', users })
  } catch (err) {
    console.log(err.message)
  }
}

const adminDeleteUserProfile = async (req, res) => {
  try {
    const { userId } = req.params

    const updatedUser = await User.findByIdAndDelete(userId, req.body, {
      new: true
    })
    res.status(200).json({ success: true, message: 'User profile deleted' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}

const uploadProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      category,
      productQuantity
    } = req.body

    if (!req.file || !req.file.path) {
      throw new Error('No image provided')
    }

    const { path: productImage } = req.file

    const uploadRes = await cloudinary.uploader.upload(productImage, {
      upload_preset: 'TreasureCart2024'
    })

    const imageUrl = uploadRes.secure_url

    if (imageUrl) {
      const newProduct = new Product({
        productName,
        description,
        price,
        category,
        productQuantity,
        productImage: imageUrl
      })

      const savedProduct = await newProduct.save()

      res.status(200).json({
        success: true,
        message: 'Product upload successfully.',
        savedProduct
      })
    } else {
      throw new Error('Image upload failed')
    }
  } catch (err) {
    console.error(err)
    res.status(404).json({ success: false, message: err.message })
  }
}


module.exports = {
  adminLogin,
  adminRegister,
  adminCreateSubAdmin,
  adminUpdateUserProfile,
  allUser,
  allSubadmin,
  adminDeleteUserProfile,
  uploadProduct
}
