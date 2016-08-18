/**
* @fileoverview Translation for `disallowOperatorBeforeLineBreak` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = function(__current__, value) {
  if (Array.isArray(value) && value.indexOf('.') >= 0) {
    return {
      'dot-location': [2, 'property'],
      'operator-linebreak': [2, 'before']
    }
  }

  return {
    'operator-linebreak': [2, 'before']
  }
};
