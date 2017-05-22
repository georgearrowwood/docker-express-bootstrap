'use strict'


const logger = {

  info: function (message) {
    console.log(message)
  },

  warn: function (message) {
    console.log(message)
  },

  error: function (message) {
    console.log(message)
  },

  requestLog: function () {
    return (req, res, next) => {
      console.log('request: ' + req.originalUrl)
      next()
    }
  },

}

module.exports = logger
