/**
 * @fileoverview Tests for `disallowSpaceAfterPrefixUnaryOperators` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceAfterPrefixUnaryOperators.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceAfterPrefixUnaryOperators', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql([
      2, {
        nonwords: false,
        overrides: {}
      }
    ])

    expect(fn(['!', '++'])).to.eql([
      2, {
        nonwords: true,
        overrides: {
          '!': false,
          '++': false
        }
      }
    ])
  })
})
