/**
* @fileoverview Translation for `disallowTrailingWhitespace` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'no-trailing-spaces',
  'truthy': function(__current__, value) {
    return (value === true) ? 2 : [2, { 'skipBlankLines': true }]
  }
};
