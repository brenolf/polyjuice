/**
* @fileoverview Translation for `validateLineBreaks` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'linebreak-style',
  truthy: function(__current__, value) {
    var sys = (value === 'CLRF') ? 'windows' : 'unix'

    return [2, sys]
  }
};
