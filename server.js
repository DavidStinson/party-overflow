import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as authRouter } from './routes/authRouter.js'
import { router as postRouter } from './routes/postRouter.js'
import { router as commentRouter } from './routes/commentRouter.js'

const app = express()

import('./config/database')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(
    express.static(
        path.join(path.dirname(fileURLToPath(import.meta.url)), 'build')
    )
)

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/comments', commentRouter)


app.get('/*', (req, res) => {
    res.sendFile(
        path.join(
            path.dirname(fileURLToPath(import.meta.url)),
            'build',
            'index.html'
        )
    )
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})