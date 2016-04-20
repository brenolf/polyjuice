/**
 * @fileoverview Tests for `requireSpaceBeforeObjectValues` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpaceBeforeObjectValues.js')

var getFn = caller(lib)

describe('jscs#requireSpaceBeforeObjectValues', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([2, { 'beforeColon': false, 'afterColon': false }])

    expect(fn()).to.eql([2, { 'afterColon': true }])

    expect(fnBound()).to.eql([2, {
      'afterColon': true,
      'beforeColon': false
    }])
  })
})
