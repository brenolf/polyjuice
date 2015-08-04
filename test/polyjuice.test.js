import {expect} from 'chai'
import {jshint} from '../'

describe('Polyjuice', () => {
  let str_src = __dirname + '/fixtures/jshint_to_eslint_src.json'
  let str_trg = __dirname + '/fixtures/jshint_to_eslint_trg.json'

  let src = require(str_src)
  let trg = require(str_trg)

  describe('#jshint', () => {
    context('when there are valid arguments', () => {
      it('transpiles the input file to an output file', () => {
        expect(jshint(str_src)).to.eql(trg)
      })
    })

    context('when there are no arguments or path is invalid', () => {
      it('throws an error', () => {
        expect(() => {jshint()}).to.throw()
        expect(() => {jshint('fake_file')}).to.throw()
      })
    })
  })
})
