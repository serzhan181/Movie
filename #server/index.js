require('dotenv').config()
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT)

app.get('/', (req, res) => {
  res.json({ message: 'youre all set' })
})
