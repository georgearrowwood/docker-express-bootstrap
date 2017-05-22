'use strict'
const server = require('./lib/server.bootstrap')
const logger = require('./lib/components/logger')

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

server
  .listen(port, () => {
    logger.info(`Listening on port ${port} env ${env}`)
  })
