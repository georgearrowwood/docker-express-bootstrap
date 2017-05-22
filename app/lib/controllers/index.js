'use strict'
const exampleService = require('../services/example')
const logger = require('../components/logger')
let model = require('../model')()

module.exports.home = function (req, res) {
  res.json({
    query: req.params.queryText,
    url: result,
  })
}
