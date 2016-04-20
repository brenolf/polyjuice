/**
 * @fileoverview Tests for `max-len` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/max-len.js')

var getFn = caller(lib)

describe('eslint#max-len', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 42])).to.eql(42)
  })
})
