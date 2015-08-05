import {expect} from 'chai'
const interpreter = require('../lib/polyjuice/interpreter')

describe('Reader', () => {
  let dictionary = require('./fixtures/langx_dic')
  let tb = {true: 'default-true', false: 'default-false'}

  let src = require('./fixtures/langx_src')
  let trg = require('./fixtures/langx_trg')

  it('converts correctly a whole json file', () => {
    expect(interpreter(dictionary, src, tb)).to.eql(trg)
  })
})
