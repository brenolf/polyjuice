/**
 * @fileoverview Tests for `disallowUnusedVariables` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowUnusedVariables.js')

var getFn = caller(lib)

describe('jscs#disallowUnusedVariables', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([2, {
      vars: 'local',
      args: 'xxx'
    }])

    expect(fn()).to.eql([2, {
      vars: 'all',
      args: 'none'
    }])

    expect(fnBound()).to.eql([2, {
      vars: 'all',
      args: 'xxx'
    }])
  })
})
