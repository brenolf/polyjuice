var expect = require('chai').expect
var from = require('../').from

describe('jscs', function () {
  var str_src = __dirname + '/fixtures/jscs_to_eslint_src.json'
  var str_trg = __dirname + '/fixtures/jscs_to_eslint_trg.json'

  var trg = require(str_trg)

  context('when there are valid arguments', function () {
    it('transpiles the input file to an output file', function () {
      expect(from.jscs(str_src)).to.eql(trg)
    })
  })

  context('when there are no arguments or path is invalid', function () {
    it('throws an error', function () {
      expect(function () { from.jscs() }).to.throw()
      expect(function () { from.jscs('fake_file') }).to.throw()
    })
  })
})
