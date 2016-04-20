/**
* @fileoverview Translation for `shadow` (JSHint) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'no-shadow',
  'eval': function(__current__, value) {
    switch (value) {
      case true:
        return 0

      case 'inner':
      case false:
        return 2

      default:
        return [2, {
          'builtinGlobals': true,
          'hoist': 'all'
        }]
    }
  }
};
