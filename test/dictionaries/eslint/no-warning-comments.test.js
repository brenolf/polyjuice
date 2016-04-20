/**
 * @fileoverview Tests for `no-warning-comments` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-warning-comments.js')

var getFn = caller(lib)

describe('eslint#no-warning-comments', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(
      [2, { 'terms': ['todo', 'fixme', 'any'], 'location': 'anywhere' }]
    )).to.eql(['todo', 'fixme', 'any'])

    expect(fn(
      [1, { 'location': 'anywhere' }]
    )).to.eql([])
  })
})
