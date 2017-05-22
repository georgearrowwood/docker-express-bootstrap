'use strict'

let axios = require('axios')

const service = {

  getRequestInstance: function (baseUrl, options) {
    if (!baseUrl) throw new Error('no base url passed for request instance creation')
    let params = {
      baseURL: baseUrl,
      timeout: 6500,
      headers: {},
    }
    if (options.headers) {
      params.headers = Object.assign(params.headers, options.headers)
    }
    if (options.timeout) params.timeout = options.timeout
    return axios.create(params)
  },

}

module.exports = service
