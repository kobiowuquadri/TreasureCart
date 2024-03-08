const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes')
const adminRouter = require('./Routes/adminRoutes')
const cookieParser = require ('cookie-parser')


const port = process.env.PORT

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRouter)
app.use(adminRouter)
app.use(cookieParser())


// CORS CONFIG


// HOME
app.get('/', (req, res) => {
   res.send('Backend Working Successfully.')
})
   


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()