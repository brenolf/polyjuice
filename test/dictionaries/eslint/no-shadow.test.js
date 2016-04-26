/**
 * @fileoverview Tests for `no-shadow` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-shadow.js')

var getFn = caller(lib)

describe('eslint#no-shadow', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(2)).to.eql({ shadow: false })
    expect(fn(0)).to.eql({ shadow: true })
    expect(fn([2, {}])).to.eql({ shadow: 'outer' })
  })
})
