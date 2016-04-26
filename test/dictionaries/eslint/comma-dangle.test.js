/**
 * @fileoverview Tests for `comma-dangle` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/comma-dangle.js')

var getFn = caller(lib)

describe('eslint#comma-dangle', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(2)).to.eql(
      { disallowTrailingComma: true }
    )

    expect(fn([2, 'never'])).to.eql(
      { disallowTrailingComma: true }
    )

    expect(fn([2, 'always'])).to.eql(
      { requireTrailingComma: true }
    )
  })
})
