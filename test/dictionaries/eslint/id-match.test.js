/**
 * @fileoverview Tests for `id-match` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/id-match.js')

var getFn = caller(lib)

describe('eslint#id-match', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, '^(a|b|c)$', {}])).to.eql(['a', 'b', 'c'])
    expect(fn([2, '^[a-z]+([A-Z][a-z]+)*$', {}])).to.eql(['a-z]+([A-Z][a-z]+)'])
  })
})
