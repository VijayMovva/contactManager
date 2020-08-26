const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
const router = require('./config/routes')

const app = express()
const port = process.env.PORT || 3000

const path = require('path')

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})

// connect to mongo database
connectDB()

//
app.use(cors())

// express to parse json
app.use(express.json())

app.use('/api',router)

app.listen(port, ()=>{
    console.log('listening on port', port)
})