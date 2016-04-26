/**
 * @fileoverview Tests for `quote-props` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/quote-props.js')

var getFn = caller(lib)

describe('eslint#quote-props', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'as-needed'])).to.eql({
      disallowQuotedKeysInObjects: true
    })

    expect(fn([2, 'always'])).to.eql({
      requireQuotedKeysInObjects: true
    })

    expect(fn([2, 'as-needed', { 'keywords': true }])).to.eql({
      disallowQuotedKeysInObjects: 'allButReserved'
    })

    expect(fn(2)).to.eql({
      requireQuotedKeysInObjects: true
    })

    expect(fn(0)).to.eql({})
  })
})
