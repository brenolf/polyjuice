/**
 * @fileoverview Tests for `space-before-function-paren` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/space-before-function-paren.js')

var getFn = caller(lib)

describe('eslint#space-before-function-paren', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'always'])).to.eql({
      requireSpacesInFunctionDeclaration: true,
      requireSpacesInFunctionExpression: true
    })

    expect(fn([2, 'never'])).to.eql({
      disallowSpacesInFunctionDeclaration: true,
      disallowSpacesInFunctionExpression: true,
      disallowSpacesInFunction: true,
      disallowSpacesInNamedFunctionExpression: true
    })

    expect(fn([0])).to.eql({})
  })
})
