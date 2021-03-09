import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRouter)

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running && DB connected.')
    })
  })
  .catch((err) => {
    console.log(err)
  })
