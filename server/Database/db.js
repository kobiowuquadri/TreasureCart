const mongoose = require('mongoose')
const config = require('../Config/config')

const connectToDB = async () => {
   try {
     await mongoose.connect(config.mongodb.url)
     console.log("Connected to database Successfully.")
   }
   catch(err){
    console.log(err.message)
   }
}

module.exports = connectToDB