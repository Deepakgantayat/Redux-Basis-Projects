const express = require('express')
const cors = require('cors')
const app = express()
const port = 3099
const configureDB = require('./config/database')
const router = require('./config/routes')
app.use(express.json())
configureDB()
app.use(cors())

// ROute Handlers || Request Handlers
app.get('/', (req,res) => {
    res.send('Welcome to the page')
})

app.use('/',router)

app.listen(port, () => {
    console.log('listening to the port,',port)
})

