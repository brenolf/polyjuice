/**
* @fileoverview Translation for `array-bracket-spacing` (ESLint) to JSCS
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
    var result = true
    var verb = 'require'
    var obj = {}

    if (value[1] === 'never') {
      verb = 'disallow'
    }

    if (value[2] && (value[2].objectsInArrays || value[2].arraysInArrays)) {
      result = {
        allExcept: value[2].objectsInArrays ? ['{', '}'] : []
      }

      result.allExcept =
        result.allExcept.concat(value[2].arraysInArrays ? ['[', ']'] : [])
    }

    obj[verb + 'SpacesInsideArrayBrackets'] = result
    obj[verb + 'SpacesInsideObjectBrackets'] = result

    return obj
  }
};
