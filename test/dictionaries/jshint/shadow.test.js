/**
 * @fileoverview Tests for `shadow` (JSHint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jshint/shadow.js')

var getFn = caller(lib)

describe('jshint#shadow', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(true)).to.eql(0)

    expect(fn(false)).to.eql(2)

    expect(fn('inner')).to.eql(2)

    expect(fn('outer')).to.eql([2, {
      'builtinGlobals': true,
      'hoist': 'all'
    }])
  })
})
