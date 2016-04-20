/**
 * @fileoverview Tests for `disallowSpaceBeforeKeywords` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpaceBeforeKeywords.js')

var getFn = caller(lib)

describe('jscs#disallowSpaceBeforeKeywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([
      2, {
        overrides: {
          'if': { after: false }
        }
      }
    ])

    expect(fn(true)).to.eql([2, { before: false, overrides: {} }])

    expect(fnBound(true)).to.eql([2, {
      before: false,
      overrides: {
        'if': { after: false }
      }
    }])

    expect(fn([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      overrides: {
        'else': { before: false },
        'try': { before: false },
        'catch': { before: false }
      }
    }])

    expect(fnBound([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      before: false,
      overrides: {
        'else': { before: false },
        'try': { before: false },
        'catch': { before: false },
        'if': { after: false }
      }
    }])
  })
})
