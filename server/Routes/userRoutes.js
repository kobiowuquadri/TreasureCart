// User Routes
 const express = require('express')
 const router = express.Router()
 const registerUser = require('../Controllers/userController')
const multer = require('multer')
const uploadImage = require('../Middlewares/uploadImage')


const fileStorageEngine = multer.diskStorage({
    destination: ( req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: ( req, file, cb) => {
        cb(null,Date.now() + "__" + file.originalname)
    },

})

const upload = multer({
    storage: fileStorageEngine,
    fileFilter: (req, file, cb) => {
        try{
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true)
             } else{
                    cb(null, false)
                    return cb(new Error( "only png, jpg and jpeg format is allowed"))
                }
        }
        catch(Error){
            console.log(Error.message)
        }
        }
})



router.post('/api/upload', upload.single('file'), uploadImage )
router.post ('/register', registerUser)

module.exports = router