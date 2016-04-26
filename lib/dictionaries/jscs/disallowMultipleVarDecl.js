/**
* @fileoverview Translation for `disallowMultipleVarDecl` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'one-var',
  truthy: function(__current__, value) {
    if (value === true || value.strict) {
      return [2, 'never']
    }

    return [2, { uninitialized: 'always', initialized: 'never' }]
  }
};
