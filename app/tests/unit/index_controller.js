'use strict';
// using chai assertion library for expect
const expect = require('chai').expect;
// rewire to mock dependencies
const rewire = require('rewire');

const indexController = rewire('../../lib/controllers/index')

describe("Unit Test for Index controller", () => {
  it("gets data from get endpoint", done => {
    // model mock
    const model = {
      Test: {
        find: (params) => {
          return Promise.resolve({
            url: 'http://url-for-result'
          });
        }
      }
    }
    indexController.__set__('model', model)
    // run
    indexController.home(
      // mock request
      {
        params: {
          queryText: 'test3'
        }
      },
      // mock response
      {
        json: result => {
          expect(result).to.be.an('object')
          expect(result.url).to.be.not.empty;
          expect(result.url).to.be.a('string');
          expect(result.query).to.be.not.empty;
          done();
        }
      }
    )
  });
});
