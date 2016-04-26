/**
 * @fileoverview Tests for `disallowArrowFunctions` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowArrowFunctions.js')

var getFn = caller(lib)

describe('jscs#disallowArrowFunctions', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([
      'A', 'B'
    ])

    expect(fn()).to.eql(['ArrowFunctionExpression'])

    expect(fnBound()).to.eql(['A', 'B', 'ArrowFunctionExpression'])
  })
})
