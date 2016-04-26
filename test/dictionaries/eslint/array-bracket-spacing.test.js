/**
 * @fileoverview Tests for `array-bracket-spacing` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/array-bracket-spacing.js')

var getFn = caller(lib)

describe('eslint#array-bracket-spacing', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'never'])).to.eql({
      disallowSpacesInsideArrayBrackets: true,
      disallowSpacesInsideObjectBrackets: true
    })

    expect(fn([2, 'always'])).to.eql({
      requireSpacesInsideArrayBrackets: true,
      requireSpacesInsideObjectBrackets: true
    })

    var result = fn([2, 'never', {
      'singleValue': true,
      'objectsInArrays': true,
      'arraysInArrays': true
    }])

    expect(result.disallowSpacesInsideArrayBrackets.allExcept).to.eql(
      ['{', '}', '[', ']']
    )

    expect(result.disallowSpacesInsideObjectBrackets.allExcept).to.eql(
      ['{', '}', '[', ']']
    )
  })
})
