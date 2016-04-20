/**
* @fileoverview Translation for `disallowArrowFunctions` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'no-restricted-syntax',
  'truthy': function(__current__) {
    var attrs = __current__ || []

    attrs.push('ArrowFunctionExpression')

    return attrs
  }
};
