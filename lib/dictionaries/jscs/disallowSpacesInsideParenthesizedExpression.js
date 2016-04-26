/**
* @fileoverview Translation for `disallowSpacesInsideParenthesizedExpression` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'space-in-parens',
  truthy: function(__current__, value) {
    if (value === true) {
      return [2, 'never']
    }

    var exceptions = []

    var except = value.allExcept

    if (value.allExcept.indexOf('{') > -1 || except.indexOf('}' > -1)) {
      exceptions.push('{}')
    }

    return [2, 'never', { 'exceptions': exceptions }]
  }
};
