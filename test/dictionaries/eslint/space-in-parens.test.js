/**
 * @fileoverview Tests for `space-in-parens` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/space-in-parens.js')

var getFn = caller(lib)

describe('eslint#space-in-parens', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'always'])).to.eql({
      requireSpacesInsideParentheses: 'all'
    })

    expect(fn([2, 'never'])).to.eql({
      disallowSpacesInsideParentheses: true
    })

    expect(fn(0)).to.eql({})

    expect(fn([2, 'never', { exceptions: ['[]'] }])).to.eql({
      disallowSpacesInsideParentheses: { only: [ '[', ']' ] }
    })

    expect(fn([2, 'always', { exceptions: ['{}'] }])).to.eql({
      requireSpacesInsideParentheses: {
        all: true,
        except: [ '{', '}' ]
      }
    })
  })
})
