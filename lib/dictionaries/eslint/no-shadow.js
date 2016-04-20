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
  'target': 'jshint',
  'eval': function(__current__, value) {
    var result = 'outer'

    if (value === 2) {
      result = false
    }

    if (value === 0) {
      result = true
    }

    return { shadow: result }
  }
};
