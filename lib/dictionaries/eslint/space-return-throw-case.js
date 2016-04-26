/**
* @fileoverview Translation for `space-return-throw-case` (ESLint) to JSCS
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  target: 'jscs',
  eval: function(__current__, value) {
    if (value[0] === 0 || value === 0) {
      return {}
    }

    var list = (__current__ || []).concat(['return', 'throw', 'case'])

    if (value[1] === 'always') {
      return { requireSpaceAfterKeywords: list }
    }

    return { disallowSpaceAfterKeywords: list }
  }
};
