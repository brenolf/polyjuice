/**
 * @fileoverview Tests for `requireSpaceBeforeKeywords` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpaceBeforeKeywords.js')

var getFn = caller(lib)

describe('jscs#requireSpaceBeforeKeywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([
      2, {
        overrides: {
          'if': { after: false }
        }
      }
    ])

    expect(fn(true)).to.eql([2, { before: true, overrides: {} }])

    expect(fnBound(true)).to.eql([2, {
      before: true,
      overrides: {
        'if': { after: false }
      }
    }])

    expect(fn([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      overrides: {
        'else': { before: true },
        'try': { before: true },
        'catch': { before: true }
      }
    }])

    expect(fnBound([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      before: true,
      overrides: {
        'else': { before: true },
        'try': { before: true },
        'catch': { before: true },
        'if': { after: false }
      }
    }])
  })
})
