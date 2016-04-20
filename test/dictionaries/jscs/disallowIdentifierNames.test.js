/**
 * @fileoverview Tests for `disallowIdentifierNames` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowIdentifierNames.js')

var getFn = caller(lib)

describe('jscs#disallowIdentifierNames', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(['a', 'b'])).to.eql(
      [2, '^(a|b)$', {'properties': true}]
    )
  })
})
