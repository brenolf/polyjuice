/**
 * @fileoverview Tests for `no-console` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-console.js')

var getFn = caller(lib)

describe('eslint#no-console', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnContext = getFn(['x'])

    expect(fn()).to.eql(['-console'])
    expect(fnContext()).to.eql(['x', '-console'])
  })
})
