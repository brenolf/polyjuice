/**
 * @fileoverview Tests for `dot-notation` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/dot-notation.js')

var getFn = caller(lib)

describe('eslint#dot-notation', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(2)).to.eql(true)
    expect(fn([2, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }])).to.eql({
      allExcept: ['snake_case']
    })
    expect(fn([2, {
      'allowKeywords': true,
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }])).to.eql({
      allExcept: ['snake_case', 'keywords']
    })
  })
})
