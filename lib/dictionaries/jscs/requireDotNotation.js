/**
* @fileoverview Translation for `requireDotNotation` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'dot-notation',
  'truthy': function(__current__, value) {
    var rules = {}

    if (value === true) {
      return 2
    }

    if (value === 'except_snake_case') {
      return [2, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }]
    }

    if (value.allExcept.indexOf('keywords') > -1) {
      rules.allowKeywords = true
    }

    if (value.allExcept.indexOf('snake_case') > -1) {
      rules.allowPattern = '^[a-z]+(_[a-z]+)+$'
    }

    return [2, rules]
  }
};
