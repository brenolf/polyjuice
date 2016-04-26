/**
 * @fileoverview Tests for `requireSpacesInsideParentheses` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpacesInsideParentheses.js')

var getFn = caller(lib)

describe('jscs#requireSpacesInsideParentheses', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn('all')).to.eql([2, 'always'])

    expect(fn({ except: ['[', ']', '{'] })).to.eql(
      [2, 'always', { 'exceptions': ['{}', '[]'] }]
    )
  })
})
