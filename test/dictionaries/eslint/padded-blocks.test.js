/**
 * @fileoverview Tests for `padded-blocks` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/padded-blocks.js')

var getFn = caller(lib)

describe('eslint#padded-blocks', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'never'])).to.eql(
      { disallowPaddingNewlinesInBlocks: true }
    )

    expect(fn([2, 'always'])).to.eql(
      { requirePaddingNewlinesInBlocks: true }
    )

    expect(fn(0)).to.eql({})
  })
})
