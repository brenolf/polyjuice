/**
 * @fileoverview Tests for `consistent-this` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/consistent-this.js')

var getFn = caller(lib)

describe('eslint#consistent-this', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'x'])).to.eql('x')
    expect(fn([2, ['x', 'y']])).to.eql(['x', 'y'])
  })
})
