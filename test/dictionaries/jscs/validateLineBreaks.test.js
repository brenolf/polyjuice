/**
 * @fileoverview Tests for `validateLineBreaks` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/validateLineBreaks.js')

var getFn = caller(lib)

describe('jscs#validateLineBreaks', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn('CLRF')).to.eql([2, 'windows'])

    expect(fn('LF')).to.eql([2, 'unix'])
  })
})
