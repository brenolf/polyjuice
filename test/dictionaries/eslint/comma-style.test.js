/**
 * @fileoverview Tests for `comma-style` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/comma-style.js')

var getFn = caller(lib)

describe('eslint#comma-style', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([1, 'first'])).to.eql({
      disallowCommaBeforeLineBreak: true
    })

    expect(fn([1, 'all'])).to.eql({
      requireCommaBeforeLineBreak: true
    })
  })
})
