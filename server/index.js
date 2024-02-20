const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const router = require('./Routes/userRoutes')


const port = process.env.PORT




// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)


// CORS CONFIG


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()
