/**
 * @fileoverview Tests for `validateIndentation` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/validateIndentation.js')

var getFn = caller(lib)

describe('jscs#validateIndentation', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(42)).to.eql([2, 42, {'SwitchCase': 1}])

    expect(fn('\t')).to.eql([2, 'tab', {'SwitchCase': 1}])

    expect(fn({ 'value': '\t', 'includeEmptyLines': true })).to.eql(
      [2, 'tab', {'SwitchCase': 1}]
    )

    expect(fn({ 'value': 42, 'includeEmptyLines': true })).to.eql(
      [2, 42, {'SwitchCase': 1}]
    )
  })
})
