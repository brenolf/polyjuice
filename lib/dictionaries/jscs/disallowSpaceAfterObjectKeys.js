/**
* @fileoverview Translation for `disallowSpaceAfterObjectKeys` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'key-spacing',
  truthy: function(__current__, value) {
    if (value.allExcept && value.allExcept[0] === 'aligned') {
      return [2, { 'align': 'colon' }]
    }

    return [2, { 'beforeColon': false, 'afterColon': true }]
  }
};
