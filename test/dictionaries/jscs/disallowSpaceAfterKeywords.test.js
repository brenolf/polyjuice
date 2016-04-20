/**
 * @fileoverview Tests for `disallowSpaceAfterKeywords` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceAfterKeywords.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceAfterKeywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([
      2, {
        overrides: {
          'if': { after: true }
        }
      }
    ])

    expect(fn(true)).to.eql([2, { after: false, overrides: {} }])

    expect(fnBound(true)).to.eql([2, {
      after: false,
      overrides: {
        'if': { after: true }
      }
    }])

    expect(fn([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      overrides: {
        'else': { after: false },
        'try': { after: false },
        'catch': { after: false }
      }
    }])

    expect(fnBound([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      after: false,
      overrides: {
        'else': { after: false },
        'try': { after: false },
        'catch': { after: false },
        'if': { after: true }
      }
    }])
  })
})
