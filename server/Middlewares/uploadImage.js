// Configure multer setup for image upload, 
// Add error handle to accept, (.jpg, .jpeg, .png)...
// Multer


const uploadImage =  (req, res) => {
    try{
        res.json(req.file)
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = uploadImage