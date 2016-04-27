/**
* @fileoverview Translation for `validateCommentPosition` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = function(__current__, value) {
  if (value.position === 'beside') {
    return {
      'no-inline-comments': 2
    }
  }

  return {}
};
