/**
* @fileoverview Translation for `disallowQuotedKeysInObjects` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'quote-props',
  'truthy': function(__current__, value) {
    if (value !== 'allButReserved') {
      return [2, 'as-needed']
    }

    return [2, 'as-needed', {'keywords': true}]
  }
};
