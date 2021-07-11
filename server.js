const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

const authRouter = require('./routes/authRouter')
const postRouter = require('./routes/postRouter')


app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/users', authRouter)
app.use('/api/posts', postRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})