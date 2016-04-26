/**
* @fileoverview Translation for `id-match` (ESLint) to JSCS
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
  name: 'disallowIdentifierNames',
  truthy: function(__current__, value) {
    return value[1].slice(2, -2).split('|')
  }
};
