/**
* @fileoverview Translation for `requireSpacesInsideArrayBrackets` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'array-bracket-spacing',
  'truthy': function(__current__, value) {
    if (value === 'all' || value === true) {
      return [2, 'always']
    }

    value = value.allExcept

    var rules = {}

    if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
      rules.objectsInArrays = false
    }

    if (value.indexOf('[') > -1 || value.indexOf(']') > -1) {
      rules.arraysInArrays = false
    }

    return [2, 'always', rules]
  }
};
