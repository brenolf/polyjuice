/**
* @fileoverview Translation for `indent` (ESLint) to JSCS
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
  name: 'validateIndentation',
  truthy: function(__current__, value) {
    if (value === 2) {
      return 4
    }

    return value[1] === 'tab' ? '\t' : value[1]
  }
};
