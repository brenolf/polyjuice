/**
 * @fileoverview Tests for `disallowSpaceAfterObjectKeys` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceAfterObjectKeys.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceAfterObjectKeys', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn({ allExcept: ['aligned'] })).to.eql([2, { 'align': 'colon' }])

    expect(fn(true)).to.eql(
      [2, { 'beforeColon': false, 'afterColon': true }]
    )
  })
})
