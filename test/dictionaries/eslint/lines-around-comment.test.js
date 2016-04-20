/**
 * @fileoverview Tests for `lines-around-comment` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/lines-around-comment.js')

var getFn = caller(lib)

describe('eslint#lines-around-comment', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var result = {
      requirePaddingNewLinesBeforeLineComments: true,
      requireSpaceAfterLineComment: true
    }

    expect(fn(2)).to.eql(result)
    expect(fn([2, 'x'])).to.eql(result)
    expect(fn([0])).to.eql({})
  })
})
