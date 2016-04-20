/**
* @fileoverview Translation for `requireSpaceBeforeComma` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'comma-spacing',
  'truthy': function(__current__) {
    if (__current__) {
      __current__[1].before = true

      return __current__
    }

    return [2, {'before': true}]
  }
};
