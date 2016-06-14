/**
 * @fileoverview Tests for `validateQuoteMarks` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/validateQuoteMarks.js')

var getFn = caller(lib)

describe('jscs#validateQuoteMarks', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn('"')).to.eql([2, 'double'])

    expect(fn(true)).to.eql([2, 'double'])

    expect(fn('\'')).to.eql([2, 'single'])

    expect(fn({ 'mark': '"', 'escape': true })).to.eql(
      [2, 'double', { avoidEscape: true }]
    )

    expect(fn({ 'mark': '"', 'escape': false })).to.eql(
      [2, 'double']
    )
  })
})
