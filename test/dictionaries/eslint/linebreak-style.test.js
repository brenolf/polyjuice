/**
 * @fileoverview Tests for `linebreak-style` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/linebreak-style.js')

var getFn = caller(lib)

describe('eslint#linebreak-style', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'windows'])).to.eql('CLRF')
    expect(fn([2, 'unix'])).to.eql('LF')
  })
})
