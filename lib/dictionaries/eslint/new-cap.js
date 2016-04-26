/**
* @fileoverview Translation for `new-cap` (ESLint) to JSCS
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
  name: 'requireCapitalizedConstructors',
  truthy: function(__current__, value) {
    if (value[1]) {
      var a = value[1].newIsCapExceptions || []
      var b = value[1].capIsNewExceptions || []

      return { allExcept: a.concat(b) }
    }

    return true
  }
};
