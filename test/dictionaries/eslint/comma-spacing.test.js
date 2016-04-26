/**
 * @fileoverview Tests for `comma-spacing` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/comma-spacing.js')

var getFn = caller(lib)

describe('eslint#comma-spacing', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, {'before': false}])).to.eql({
      requireSpaceBeforeComma: true
    })

    expect(fn([2, {'before': true}])).to.eql({
      disallowSpaceBeforeComma: true
    })
  })
})
