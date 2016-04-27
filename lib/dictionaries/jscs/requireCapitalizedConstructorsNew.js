/**
* @fileoverview Translation for `requireCapitalizedConstructorsNew` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'new-cap',
  truthy: function(__current__, value) {
    if (value !== true) {
      return [2, {
        capIsNewExceptions: value.allExcept
      }]
    }

    return [2, {
      capIsNewExceptions: []
    }]
  }
};
