/**
 * @fileoverview Tests for `disallowSpaceBeforeObjectValues` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceBeforeObjectValues.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceBeforeObjectValues', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([0, {'afterColon': true, 'x': 2}])

    expect(fn()).to.eql([2, {'afterColon': false}])
    expect(fnBound()).to.eql([0, {'afterColon': false, 'x': 2}])
  })
})
