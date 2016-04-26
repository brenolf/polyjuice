/**
 * @fileoverview Tests for `disallowKeywordsInComments` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowKeywordsInComments.js')

var getFn = caller(lib)

describe('jscs#disallowKeywordsInComments', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn('x')).to.eql(
      [2, {'terms': ['x'], 'location': 'anywhere'}]
    )

    expect(fn(['x', 'y'])).to.eql(
      [2, {'terms': ['x', 'y'], 'location': 'anywhere'}]
    )

    expect(fn(true)).to.eql(
      [2, {'terms': ['fixme', 'todo'], 'location': 'anywhere'}]
    )
  })
})
