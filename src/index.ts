import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { authRouter, postsRoute, miscRoute, userRoute } from './routes'
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

// ROUTES
app.use('/auth', authRouter)
app.use('/user', userRoute)
app.use('/posts', postsRoute)
app.use('/misc', miscRoute)

// CONNECTION
createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running && DB connected.')
    })
  })
  .catch((err) => {
    console.log(err)
  })
