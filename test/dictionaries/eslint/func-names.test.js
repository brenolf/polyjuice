/**
 * @fileoverview Tests for `func-names` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/func-names.js')

var getFn = caller(lib)

describe('eslint#func-names', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(0)).to.eql({})

    expect(fn(2)).to.eql({
      requireNamedUnassignedFunctions: true,
      disallowAnonymousFunctions: true
    })
  })
})
