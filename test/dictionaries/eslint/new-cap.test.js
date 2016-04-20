/**
 * @fileoverview Tests for `new-cap` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/new-cap.js')

var getFn = caller(lib)

describe('eslint#new-cap', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(2)).to.eql(true)

    expect(fn([2, {'capIsNewExceptions': ['Person']}])).to.eql({
      allExcept: ['Person']
    })

    expect(fn([2, {'capIsNewExceptions': ['foo.Person']}])).to.eql({
      allExcept: ['foo.Person']
    })
  })
})
