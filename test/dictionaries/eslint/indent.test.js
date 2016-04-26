/**
 * @fileoverview Tests for `indent` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/indent.js')

var getFn = caller(lib)

describe('eslint#indent', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(2)).to.eql(4)
    expect(fn([2, 'tab'])).to.eql('\t')
    expect(fn([2, 2])).to.eql(2)
  })
})
