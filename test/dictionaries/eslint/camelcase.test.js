/**
 * @fileoverview Tests for `camelcase` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/camelcase.js')

var getFn = caller(lib)

describe('eslint#camelcase', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, {properties: 'always'}])).to.eql(true)
    expect(fn([2, {properties: 'never'}])).to.eql('ignoreProperties')
  })
})
