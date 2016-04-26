/**
 * @fileoverview Tests for `operator-linebreak` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/operator-linebreak.js')

var getFn = caller(lib)

describe('eslint#operator-linebreak', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'before'])).to.eql(
      { disallowOperatorBeforeLineBreak: true }
    )

    expect(fn([2, 'after'])).to.eql(
      { requireOperatorBeforeLineBreak: true }
    )

    expect(fn(0)).to.eql({})
  })
})
