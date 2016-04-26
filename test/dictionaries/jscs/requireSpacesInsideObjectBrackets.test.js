/**
 * @fileoverview Tests for `requireSpacesInsideObjectBrackets` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpacesInsideObjectBrackets.js')

var getFn = caller(lib)

describe('jscs#requireSpacesInsideObjectBrackets', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql([2, 'always'])

    expect(fn('all')).to.eql([2, 'always'])

    expect(fn({ 'allExcept': ['{'] })).to.eql(
      [2, 'always', { 'objectsInArrays': false }]
    )

    expect(fn({ 'allExcept': ['['] })).to.eql(
      [2, 'always', { 'arraysInArrays': false }]
    )

    expect(fn({ 'allExcept': ['{', '['] })).to.eql(
      [2, 'always', { 'objectsInArrays': false, 'arraysInArrays': false }]
    )
  })
})
