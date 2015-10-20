var jshint = require('../../lib/dictionaries/jshint')

describe('jshint', function () {
  it('converts maxcomplexity correctly', function () {
    var maxcomplexity = jshint.maxcomplexity.truthy

    expect(maxcomplexity(42)).to.eql([2, 42])
  })

  it('converts maxdepth correctly', function () {
    var maxdepth = jshint.maxdepth.truthy

    expect(maxdepth(42)).to.eql([2, 42])
  })

  it('converts maxlen correctly', function () {
    var maxlen = jshint.maxlen.truthy

    expect(maxlen(42)).to.eql([2, 42])
  })

  it('converts maxparams correctly', function () {
    var maxparams = jshint.maxparams.truthy

    expect(maxparams(42)).to.eql([2, 42])
  })

  it('converts maxstatements correctly', function () {
    var maxstatements = jshint.maxstatements.truthy

    expect(maxstatements(42)).to.eql([2, 42])
  })

  it('converts shadow correctly', function () {
    var shadow = jshint.shadow.test

    expect(shadow(true)).to.eql(0)

    expect(shadow(false)).to.eql(2)

    expect(shadow('inner')).to.eql(2)

    expect(shadow('outer')).to.eql([2, {
      'builtinGlobals': true,
      'hoist': 'all'
    }])
  })
})
