const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require('./config/keys')
const errorMiddleware = require('./middleware/error-middleware')

const app = express()

mongoose.connect( keys.mongoURI )
    .then( () => console.log('MongoDB connected!') )
    .catch( error => console.log(error) )

app.use( morgan('dev') )
app.use( bodyParser.urlencoded({extended: true}) )
app.use( bodyParser.json() )
app.use( cookieParser() )
app.use( cors() )

app.use( '/uploads', express.static('uploads') )

app.use( '/api/auth', authRoutes )
app.use( '/api/category', categoryRoutes )
app.use( '/api/order', orderRoutes )
app.use( '/api/position', positionRoutes )

app.use( errorMiddleware )


module.exports = app