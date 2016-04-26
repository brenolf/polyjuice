/**
 * @fileoverview Tests for `requireCamelCaseOrUpperCaseIdentifiers` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireCamelCaseOrUpperCaseIdentifiers.js')

var getFn = caller(lib)

describe('jscs#requireCamelCaseOrUpperCaseIdentifiers', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql([2, { 'properties': 'never' }])

    expect(fn('ignoreProperties')).to.eql([2, { 'properties': 'always' }])
  })
})
