// multer config
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const fileFilter = (req, file, cb) => {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
  const fileExtension = path.extname(file.originalname).toLowerCase()

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true)
  } else {
    cb(new Error("Invalid file type. Only (.jpg, .jpeg, .png, and .gif) files are allowed."))
  }
}

const upload = multer({ 
  storage, 
  fileFilter,
  // limit file size to 5MB
  limits: { fileSize: 1024 * 1024 * 5 } 
})

module.exports = upload