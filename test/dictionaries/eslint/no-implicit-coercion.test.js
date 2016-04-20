/**
 * @fileoverview Tests for `no-implicit-coercion` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-implicit-coercion.js')

var getFn = caller(lib)

describe('eslint#no-implicit-coercion', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, {'boolean': true, 'number': true, 'string': true}])).to.eql(
      ['boolean', 'numeric', 'string']
    )
  })
})
