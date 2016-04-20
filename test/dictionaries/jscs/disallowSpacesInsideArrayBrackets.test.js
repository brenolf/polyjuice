/**
 * @fileoverview Tests for `disallowSpacesInsideArrayBrackets` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpacesInsideArrayBrackets.js')

var getFn = caller(lib)

describe('jscs#disallowSpacesInsideArrayBrackets', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([2, 'never', {}])

    expect(fn(true)).to.eql([2, 'never', {'singleValue': true}])

    expect(fn('nested')).to.eql([2, 'never', {
      'singleValue': true,
      'arraysInArrays': true
    }])

    expect(fnBound()).to.eql([2, 'never', {'singleValue': true}])
  })
})
