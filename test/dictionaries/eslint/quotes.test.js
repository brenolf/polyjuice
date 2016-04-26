/**
 * @fileoverview Tests for `quotes` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/quotes.js')

var getFn = caller(lib)

describe('eslint#quotes', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'backtick'])).to.eql({
      requireTemplateStrings: true
    })

    expect(fn([2, 'double'])).to.eql({
      validateQuoteMarks: '"'
    })

    expect(fn([2, 'single'])).to.eql({
      validateQuoteMarks: '\''
    })

    expect(fn([2, 'single', 'avoid-escape'])).to.eql({
      validateQuoteMarks: {
        mark: '\'',
        escape: true
      }
    })

    expect(fn(2)).to.eql({
      validateQuoteMarks: '\''
    })

    expect(fn(0)).to.eql({})
  })
})
