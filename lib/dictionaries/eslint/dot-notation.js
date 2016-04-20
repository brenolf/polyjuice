/**
* @fileoverview Translation for `dot-notation` (ESLint) to JSCS
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'target': 'jscs',
  'name': 'requireDotNotation',
  'truthy': function(__current__, value) {
    if (value[1] && value[1].allowPattern === '^[a-z]+(_[a-z]+)+$') {
      var allExcept = ['snake_case']

      if (value[1].allowKeywords) {
        allExcept.push('keywords')
      }

      return { allExcept: allExcept }
    }

    return true
  }
};
