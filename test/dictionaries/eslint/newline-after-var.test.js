/**
 * @fileoverview Tests for `newline-after-var` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/newline-after-var.js')

var getFn = caller(lib)

describe('eslint#newline-after-var', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(0)).to.eql({})

    expect(fn([1, 'always'])).to.eql({
      requireLineBreakAfterVariableAssignment: true,
      requirePaddingNewLineAfterVariableDeclaration: true
    })

    expect(fn(2)).to.eql({
      requireLineBreakAfterVariableAssignment: true,
      requirePaddingNewLineAfterVariableDeclaration: true
    })
  })
})
