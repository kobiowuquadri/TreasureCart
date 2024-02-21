const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes')




const port = process.env.PORT




// Middlewares
app.use(userRouter)
app.use(express.json())

connectToDB()


// CORS CONFIG


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()
