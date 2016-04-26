/**
 * @fileoverview Tests for `arrow-parens` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/arrow-parens.js')

var getFn = caller(lib)

describe('eslint#arrow-parens', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2])).to.eql({ requireParenthesesAroundArrowParam: true })

    expect(fn([0])).to.eql({ disallowParenthesesAroundArrowParam: true })
  })
})
