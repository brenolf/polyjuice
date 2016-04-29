/**
* @fileoverview Translation for `disallowSpaceAfterPrefixUnaryOperators` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'space-unary-ops',
  truthy: function(__current__, value) {
    var nonwords = false;
    var overrides = {};

    if (typeof value === 'object') {
      nonwords = true;

      value.forEach(function(symbol) {
        overrides[symbol] = false;
      });
    }

    return [2, {
      nonwords: nonwords,
      overrides: overrides
    }]
  }
};
