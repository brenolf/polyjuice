/**
 * @fileoverview Tests for `disallowSpaceBeforeComma` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceBeforeComma.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceBeforeComma', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([2, { 'before': true, 'after': true }])

    expect(fn()).to.eql([2, {'before': false}])

    expect(fnBound()).to.eql([2, { 'before': false, 'after': true }])
  })
})
