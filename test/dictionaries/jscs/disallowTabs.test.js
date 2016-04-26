/**
 * @fileoverview Tests for `disallowTabs` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowTabs.js')

var getFn = caller(lib)

describe('jscs#disallowTabs', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    var fnBound = getFn([2, 4])

    expect(fn(true)).to.eql([2, 2, {'SwitchCase': 1}])

    expect(fnBound(true)).to.eql([2, 4, {'SwitchCase': 1}])
  })
})
