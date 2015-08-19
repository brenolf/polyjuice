import {expect} from 'chai'
const interpreter = require('../lib/polyjuice/interpreter')

describe('Reader', () => {
  let dictionary = require('./fixtures/langx_dic')
  let tb = {true: 'default-true', false: 'default-false'}

  let src = require('./fixtures/langx_src')
  let trg = require('./fixtures/langx_trg')

  let discarded = []

  let result = interpreter(dictionary, src, tb, discarded);

  it('converts correctly a whole json file', () => {
    expect(result).to.eql(trg)
  })

  it('adds discarded rules to the last parameter', () => {
    expect(discarded).to.eql(['invisible-rule', 'non-existent-rule'])
  })
})
