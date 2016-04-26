/**
 * @fileoverview Tests for `complexity` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/complexity.js')

var getFn = caller(lib)

describe('eslint#complexity', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 10])).to.eql(10)
  })
})
