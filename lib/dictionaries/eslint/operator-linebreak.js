/**
* @fileoverview Translation for `operator-linebreak` (ESLint) to JSCS
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
    if (value[1] && value[1] === 'before') {
      return { disallowOperatorBeforeLineBreak: true }
    } else if (value[1] && value[1] === 'after') {
      return { requireOperatorBeforeLineBreak: true }
    }

    return {}
  }
};
