/**
* @fileoverview Translation for `yoda` (ESLint) to JSCS
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
    var verb = (value[1] === 'never') ? 'disallow' : 'require'

    var obj = {}

    obj[verb + 'YodaConditions'] = true

    return obj
  }
};
