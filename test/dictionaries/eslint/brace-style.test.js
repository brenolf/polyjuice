/**
 * @fileoverview Tests for `brace-style` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/brace-style.js')

var getFn = caller(lib)

describe('eslint#brace-style', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var spacedKeywords = ['do', 'for', 'if', 'else', 'switch', 'case', 'try',
    'catch', 'finally', 'void', 'while', 'with', 'return', 'typeof',
    'function']

    expect(fn([2, 'stroustrup', { 'allowSingleLine': true }])).to.eql({
      requireKeywordsOnNewLine: spacedKeywords
    })

    expect(fn(2)).to.eql({
      disallowKeywordsOnNewLine: spacedKeywords
    })
  })
})
