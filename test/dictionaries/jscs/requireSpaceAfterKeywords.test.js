/**
 * @fileoverview Tests for `requireSpaceAfterKeywords` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/requireSpaceAfterKeywords.js')

var getFn = caller(lib)

describe('jscs#requireSpaceAfterKeywords', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([
      2, {
        overrides: {
          'if': { after: true }
        }
      }
    ])

    expect(fn(true)).to.eql([2, { after: true, overrides: {} }])

    expect(fnBound(true)).to.eql([2, {
      after: true,
      overrides: {
        'if': { after: true }
      }
    }])

    expect(fn([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      overrides: {
        'else': { after: true },
        'try': { after: true },
        'catch': { after: true }
      }
    }])

    expect(fnBound([
      'else', 'try', 'catch'
    ])).to.eql([2, {
      after: true,
      overrides: {
        'else': { after: true },
        'try': { after: true },
        'catch': { after: true },
        'if': { after: true }
      }
    }])
  })
})
