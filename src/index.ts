import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { authRouter, postsRoute, miscRoute, userRoute } from './routes'
import dotenv from 'dotenv'
import path from 'path'
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
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}
// ROUTES

app.use('/auth', authRouter)
app.use('/user', userRoute)
app.use('/posts', postsRoute)
app.use('/misc', miscRoute)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})
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
