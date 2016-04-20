/**
 * @fileoverview Tests for `no-trailing-spaces` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-trailing-spaces.js')

var getFn = caller(lib)

describe('eslint#no-trailing-spaces', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2])).to.eql(true)

    expect(fn([2, { 'skipBlankLines': true }])).to.eql('ignoreEmptyLines')
  })
})
