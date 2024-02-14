const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./Database/db')

const port = process.env.PORT

// Middlewares
app.use(express.json())
connectToDB()


// CORS CONFIG


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})