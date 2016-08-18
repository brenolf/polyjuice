/**
 * @fileoverview Tests for `disallowImplicitTypeConversion` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowImplicitTypeConversion.js')

var getFn = caller(lib)

describe('jscs#disallowImplicitTypeConversion', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(['numeric'])).to.eql(
      [2, { number: true, string: false, boolean: false }]
    )
  })
})
