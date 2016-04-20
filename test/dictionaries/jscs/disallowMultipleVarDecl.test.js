/**
 * @fileoverview Tests for `disallowMultipleVarDecl` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowMultipleVarDecl.js')

var getFn = caller(lib)

describe('jscs#disallowMultipleVarDecl', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql([2, 'never'])

    expect(fn({ strict: true })).to.eql([2, 'never'])

    expect(fn({ allExcept: ['require'] })).to.eql(
      [2, { uninitialized: 'always', initialized: 'never' }]
    )
  })
})
