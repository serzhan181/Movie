import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { authRouter, postsRoute } from './routes'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  })
)

app.use('/auth', authRouter)
app.use('/posts', postsRoute)

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running && DB connected.')
    })
  })
  .catch((err) => {
    console.log(err)
  })
