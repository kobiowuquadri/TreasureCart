// Configure multer setup for image upload, 
// Add error handle to accept, (.jpg, .jpeg, .png)...
// Multer
const multer = require('multer')

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


module.exports = upload