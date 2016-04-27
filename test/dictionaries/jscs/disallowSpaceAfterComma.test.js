/**
 * @fileoverview Tests for `disallowSpaceAfterComma` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceAfterComma.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceAfterComma', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([2, { 'before': true, 'after': true }])

    expect(fn()).to.eql([2, {'after': false}])

    expect(fnBound()).to.eql([2, { 'before': true, 'after': false }])
  })
})
