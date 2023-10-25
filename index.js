const express = require('express')
const app = express()
const path = require('path');
const connectDB = require('./config/database')
const router = require('./config/routes')
const port = 8000
const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, './bin/public')))

app.use(express.json())

app.use(router)

connectDB()

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})