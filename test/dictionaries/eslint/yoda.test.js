/**
 * @fileoverview Tests for `yoda` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/yoda.js')

var getFn = caller(lib)

describe('eslint#yoda', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn([2, 'always'])).to.eql({
      requireYodaConditions: true
    })

    expect(fn([2, 'never'])).to.eql({
      disallowYodaConditions: true
    })
  })
})
