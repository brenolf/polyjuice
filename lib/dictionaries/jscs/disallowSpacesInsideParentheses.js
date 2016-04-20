/**
* @fileoverview Translation for `disallowSpacesInsideParentheses` (JSCS) to ESLint
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
    if (value === true) {
      return [2, 'never']
    }

    var exceptions = []

    var only = value.only

    var signals = ['{}', '()', '[]']

    signals.forEach(function(str) {
      if (only.indexOf(str[0]) > -1 || only.indexOf(str[1]) > -1) {
        if (exceptions.indexOf(str) === -1) {
          exceptions.push(str)
        }
      }
    })

    return [2, 'never', { 'exceptions': exceptions }]
  }
};
