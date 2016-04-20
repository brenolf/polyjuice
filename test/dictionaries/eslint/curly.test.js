/**
 * @fileoverview Tests for `curly` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/curly.js')

var getFn = caller(lib)

describe('eslint#curly', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'multi-line'])).to.eql({ disallowCurlyBraces: true })
    expect(fn([2, 'all'])).to.eql({ requireCurlyBraces: true })
  })
})
