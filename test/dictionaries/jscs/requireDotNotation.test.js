/**
 * @fileoverview Tests for `requireDotNotation` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireDotNotation.js')

var getFn = caller(lib)

describe('jscs#requireDotNotation', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql(2)

    expect(fn('except_snake_case')).to.eql([2, {
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }])

    expect(fn({ 'allExcept': [ 'keywords' ] })).to.eql([2, {
      'allowKeywords': true
    }])

    expect(fn({ 'allExcept': [ 'snake_case' ] })).to.eql([2, {
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }])
  })
})
