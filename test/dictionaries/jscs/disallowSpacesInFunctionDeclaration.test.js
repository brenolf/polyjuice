/**
* @fileoverview Tests for `disallowSpacesInFunctionDeclaration` (JSCS) translation
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpacesInFunctionDeclaration.js')

var getFn = caller(lib)

describe('jscs#disallowSpacesInFunctionDeclaration', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn({
      'beforeOpeningRoundBrace': true,
      'beforeOpeningCurlyBrace': true
    })).to.eql({'space-before-function-paren': [2,
      {
        'anonymous': 'ignore',
        'named': 'never'
      }
    ]})

    expect(fn({ 'beforeOpeningCurlyBrace': true })).to.be.empty
  })
})
