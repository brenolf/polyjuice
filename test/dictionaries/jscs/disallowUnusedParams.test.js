/**
 * @fileoverview Tests for `disallowUnusedParams` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowUnusedParams.js')

var getFn = caller(lib)

describe('jscs#disallowUnusedParams', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([2, {
      vars: 'xxx',
      args: 'none'
    }])

    expect(fn()).to.eql([2, {
      vars: 'local',
      args: 'all'
    }])

    expect(fnBound()).to.eql([2, {
      vars: 'xxx',
      args: 'all'
    }])
  })
})
