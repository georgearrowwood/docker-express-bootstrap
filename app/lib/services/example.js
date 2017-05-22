'use strict'
const service = require('../components/service')

const exampleService = {

  apiBaseUrl: 'http://api.example.com',

  search: function (query) {
    return service.getRequestInstance(this.apiBaseUrl, {
      timeout: process.env.API_REQUEST_TIMEOUT || 2000,
    })
    .get('/search', {
      params: {
        q: query,
      },
    })
    .then(result => {
      return result && result.data && result.data.data && result.data.data.length ? result.data.data[0].url : null
    })
  },
}

module.exports = exampleService
