import {expect} from 'chai'
import {from} from '../'

describe('jscs', () => {
  let str_src = __dirname + '/fixtures/jscs_to_eslint_src.json'
  let str_trg = __dirname + '/fixtures/jscs_to_eslint_trg.json'

  let trg = require(str_trg)

  context('when there are valid arguments', () => {
    it('transpiles the input file to an output file', () => {
      expect(from.jscs(str_src)).to.eql(trg)
    })
  })

  context('when there are no arguments or path is invalid', () => {
    it('throws an error', () => {
      expect(() => {from.jscs()}).to.throw()
      expect(() => {from.jscs('fake_file')}).to.throw()
    })
  })
})
