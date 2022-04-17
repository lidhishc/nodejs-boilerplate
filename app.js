const express = require('express')
const app = express()
var cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const { logger } = require('./config/config')
const db = require('./models')
require('./environment')

app.use(cors())
app.use(helmet())
app.use(morgan(logger.level))
db.sequelize.sync()

module.exports = app
