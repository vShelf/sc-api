const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

//configurations
const port = process.env.PORT || 8080
require('dotenv').config()
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
mongoose.Promise = Promise

// middlewares
bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())
app.use(morgan('dev'))

// controllers
require('./controllers/controllers')(app)

app.listen(port, (err) => {
  if (err) throw err
  console.log('API running at port:' + port)
})
