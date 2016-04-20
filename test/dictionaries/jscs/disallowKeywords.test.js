/**
 * @fileoverview Tests for `disallowKeywords` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowKeywords.js')

var getFn = caller(lib)

describe('jscs#disallowKeywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(['if', 'else'])).to.eql(0)

    expect(fn(['if', 'else', 'with'])).to.eql(2)
  })
})
