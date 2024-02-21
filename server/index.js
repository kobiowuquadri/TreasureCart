const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const router = require('./Routes/userRoutes')




const port = process.env.PORT




// Middlewares
app.use(router)
app.use(express.json())



// CORS CONFIG


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()
