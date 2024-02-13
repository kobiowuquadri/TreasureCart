const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

// Middlewares


// CORS CONFIG


app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})