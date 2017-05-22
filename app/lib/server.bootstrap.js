'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const logger = require('./components/logger')
const routes = require('./routes')

const app = express()

app
  .use(logger.requestLog())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use(bodyParser.json())
  .use(routes)

module.exports = app
