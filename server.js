//load environment variable from .env
require('dotenv').config()

const express = require('express')
//create a variable to configure server
const app = express()
const mongoose = require('mongoose')

//conect the server to database
mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,  
    useUnifiedTopology: true 
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connect to Database'))

//app.use allows use all the middleware
app.use(express.json())

//get the routes
const subscribersRouter = requrie('./routes/subscribers')
//the server needs to use that routes
app.use('/subscribers', subscribersRouter)


//start of the server, listen for requests
app.listen(3000, () => console.log('Server Started'))



