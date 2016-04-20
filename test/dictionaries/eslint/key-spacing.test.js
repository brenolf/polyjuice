/**
 * @fileoverview Tests for `key-spacing` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/key-spacing.js')

var getFn = caller(lib)

describe('eslint#key-spacing', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, { 'align': 'colon' }])).to.eql({
      requireAlignedObjectValues: true,
      disallowSpaceAfterObjectKeys: {
        allExcept: ['aligned']
      }
    })

    expect(fn(
      [2, { 'align': 'colon', 'beforeColon': true, 'afterColon': false }]
    )).to.eql({
      requireAlignedObjectValues: true,
      disallowSpaceAfterObjectKeys: {
        allExcept: ['aligned']
      }
    })

    expect(fn([2, {'beforeColon': true, 'afterColon': true}])).to.eql({
      requireSpaceAfterObjectKeys: true,
      requireSpaceBeforeObjectValues: true
    })

    expect(fn([2, {'beforeColon': false, 'afterColon': false}])).to.eql({
      disallowSpaceBeforeObjectValues: true,
      disallowSpaceAfterObjectKeys: true
    })

    expect(fn([2, {'beforeColon': true, 'afterColon': false}])).to.eql({
      requireSpaceAfterObjectKeys: true,
      disallowSpaceBeforeObjectValues: true
    })
  })
})
