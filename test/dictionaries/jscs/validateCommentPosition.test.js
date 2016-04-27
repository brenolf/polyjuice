/**
 * @fileoverview Tests for `validateCommentPosition` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/validateCommentPosition.js')

var getFn = caller(lib)

describe('jscs#validateCommentPosition', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn({
      position: 'above',
      allExcept: ['pragma']
    })).to.be.empty

    expect(fn({
      position: 'beside',
      allExcept: ['pragma']
    })).to.eql({
      'no-inline-comments': 2
    })
  })
})
