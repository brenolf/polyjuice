/**
 * @fileoverview Tests for `requireSpacesInFunctionExpression` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpacesInFunctionExpression.js')

var getFn = caller(lib)

describe('jscs#requireSpacesInFunctionExpression', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.be.empty

    expect(fn({ 'beforeOpeningRoundBrace': true })).to.eql({
      'space-before-function-paren': [2, 'always']
    })
  })
})
