var expect = require('chai').expect
var Reader = require('../lib/polyjuice/reader')

describe('Reader', function () {
  var dictionary = require('./fixtures/langx_dic')

  var tb = {true: 'default-true', false: 'default-false'}

  var fn = function (arg) {
    return (typeof arg === 'number') ? true : (arg ? true : false)
  };

  var reader = new Reader(dictionary, fn, tb)

  describe('#get', function () {
    context('when there is no previous content with the key', function () {
      it('converts correctly an entry', function () {
        expect(reader.get('rule1', 'value2')).to.eql({
          'new-rule1.1': 'value-x',
          'new-rule1.2': 'value-y'
        })

        expect(reader.get('rule2', false)).to.eql({
          'new-rule2.1': 'default-false',
          'new-rule2.2': 'default-false',
          'new-rule2.3': 'default-false'
        })

        expect(reader.get('rule3', 42)).to.eql({
          'new-rule3': 42
        })

        expect(reader.get('rule4', 'name')).to.eql({
          'new-rule4': 'value4-is-me'
        })

        expect(reader.get('rule5', '42')).to.eql({
          'new-rule5': 'value5-is-42'
        })

        expect(reader.get('rule6', 'value-for-6')).to.eql({
          'new-rule6': 'value-for-6'
        })

        expect(reader.get('rule7', true)).to.eql({
          'new-rule7': 'value-for-truthy-7'
        })

        expect(reader.get('rule8', false)).to.eql({
          'new-rule8': 'value-for-falsy-8'
        })

        expect(reader.get('rule9', true)).to.eql({
          'new-rule9': 'default-true'
        })

        expect(reader.get('rule10', true)).to.be.eql({
          'new-rule10': 'default-true'
        })

        expect(reader.get('rule11', '42')).to.be.eql({
          'new-rule11': 4242
        })

        expect(reader.get('extensible-rule', false)).to.be.eql({
          'new-rule10': 'didnt extend'
        })

        expect(reader.get('area51', 42)).to.be.empty
      })
    })

    context('when there is a previous content with the key', function () {
      before(function () {
        reader.current = {'new-rule10': 'an-old-value'}
      })

      it('converts correctly an entry', function () {
        expect(reader.get('substitute-rule', true)).to.be.eql({
          'new-rule10': 'replace-old-value'
        })

        expect(reader.get('extensible-rule', false)).to.be.eql({
          'new-rule10': ['extending', 'an-old-value']
        })
      })
    })
  })
})
