/**
* @fileoverview Translation for `requireSpacesInsideParentheses` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'space-in-parens',
  'truthy': function(__current__, value) {
    if (value === 'all') {
      return [2, 'always']
    }

    var exceptions = []

    var except = value.except

    var signals = ['{}', '()', '[]']

    signals.forEach(function(str) {
      if (except.indexOf(str[0]) > -1 || except.indexOf(str[1]) > -1) {
        if (exceptions.indexOf(str) === -1) {
          exceptions.push(str)
        }
      }
    })

    return [2, 'always', { 'exceptions': exceptions }]
  }
};
