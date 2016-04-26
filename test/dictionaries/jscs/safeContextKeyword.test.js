/**
 * @fileoverview Tests for `safeContextKeyword` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/safeContextKeyword.js')

var getFn = caller(lib)

describe('jscs#safeContextKeyword', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn('that')).to.eql([2, 'that'])

    expect(fn(['_', 'that'])).to.eql([2, '_'])
  })
})
