const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')
const userRouter = require('./Routes/userRoutes')
const adminRouter = require('./Routes/adminRoutes')
const cookieParser = require ('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')



const port = process.env.PORT

app.use(cors({
   origin: ['http://localhost:5173', 'https://backend-treasure-cart.onrender.com'],
   credentials: true
}))

// Middlewares
app.use(morgan('tiny'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(userRouter)
app.use(adminRouter)
app.use(cookieParser())



// HOME
app.get('/', (req, res) => {
   res.send('Backend Working Successfully.')
})
   

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})

connectToDB()