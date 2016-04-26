/**
 * @fileoverview Tests for `one-var` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/one-var.js')

var getFn = caller(lib)

describe('eslint#one-var', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'never'])).to.eql({
      disallowMultipleVarDecl: true,
      requireMultipleVarDecl: true
    })

    expect(fn([1, 'never'])).to.eql({
      disallowMultipleVarDecl: true,
      requireMultipleVarDecl: true
    })

    expect(fn([2])).to.eql({ disallowMultipleVarDecl: true })

    expect(fn(2)).to.eql({ disallowMultipleVarDecl: true })

    expect(fn(0)).to.eql({})
  })
})
