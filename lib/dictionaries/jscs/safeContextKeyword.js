/**
* @fileoverview Translation for `safeContextKeyword` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'consistent-this',
  'truthy': function(__current__, value) {
    if (typeof value === 'string') {
      return [2, value]
    }

    return [2, value[0]]
  }
};
