/**
* @fileoverview Translation for `disallowSpacesInsideArrayBrackets` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'array-bracket-spacing',
  truthy: function(__current__, value) {
    var rule = __current__ || [2, 'never', {}]

    rule[2].singleValue = true

    if (value === 'nested') {
      rule[2].arraysInArrays = true
    }

    return rule
  }
};
