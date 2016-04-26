/**
 * @fileoverview Tests for `space-after-keywords` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/space-after-keywords.js')

var getFn = caller(lib)

describe('eslint#space-after-keywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnContext = getFn(['a', 'b'])

    var keywords = ['do', 'for', 'if', 'else', 'switch', 'try', 'catch',
      'finally', 'void', 'while', 'with', 'typeof', 'function']

    expect(fn(0)).to.eql({})

    expect(fn([2, 'always'])).to.eql({
      requireSpaceAfterKeywords: keywords
    })

    expect(fn([2, 'never'])).to.eql({
      disallowSpaceAfterKeywords: keywords
    })

    expect(fnContext([2, 'always'])).to.eql({
      requireSpaceAfterKeywords: ['a', 'b'].concat(keywords)
    })

    expect(fnContext([2, 'never'])).to.eql({
      disallowSpaceAfterKeywords: ['a', 'b'].concat(keywords)
    })
  })
})
