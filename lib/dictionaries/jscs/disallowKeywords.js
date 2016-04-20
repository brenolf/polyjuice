/**
* @fileoverview Translation for `disallowKeywords` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'no-with',
  'truthy': function(__current__, value) {
    return value.indexOf('with') > -1 ? 2 : 0
  }
};
