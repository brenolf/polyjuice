var interpreter = require('../lib/polyjuice/interpreter')
var expect = require('chai').expect

describe('Reader', function () {
  var dictionary = require('./fixtures/langx_dic')
  var tb = {true: 'default-true', false: 'default-false'}

  var src = require('./fixtures/langx_src')
  var trg = require('./fixtures/langx_trg')

  var discarded = []

  var result = interpreter(dictionary, src, tb, discarded)

  it('converts correctly a whole json file', function () {
    expect(result).to.eql(trg)
  })

  it('adds discarded rules to the last parameter', function () {
    expect(discarded).to.eql(['invisible-rule', 'non-existent-rule'])
  })
})
