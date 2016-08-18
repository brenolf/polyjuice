/**
* @fileoverview Translation for `no-shadow` (ESLint) to JSHint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  target: 'jshint',
  name: 'shadow',
  eval: function(__current__, value) {
    if (value === 2) {
      return false
    }

    if (value === 0) {
      return true
    }

    return 'outer'
  }
};
