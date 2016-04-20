/**
* @fileoverview Translation for `newline-after-var` (ESLint) to JSCS
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
  'eval': function(__current__, value) {
    if (value > 0 || (value[0] > 0 && value[1] === 'always')) {
      return {
        requireLineBreakAfterVariableAssignment: true,
        requirePaddingNewLineAfterVariableDeclaration: true
      }
    }

    return {}
  }
};
