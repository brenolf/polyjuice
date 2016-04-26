/**
 * @fileoverview Tests for `max-depth` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/max-depth.js')

var getFn = caller(lib)

describe('eslint#max-depth', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 42])).to.eql(42)
  })
})
