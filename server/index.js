const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes')
const cookieParser = require ('cookie-parser')


const port = process.env.PORT

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRouter)
app.use(cookieParser())


// CORS CONFIG



app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()
