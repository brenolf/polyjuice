/**
* @fileoverview Translation for `disallowTabs` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'indent',
  truthy: function(__current__) {
    var tabs = 2;

    if (__current__ && typeof __current__[1] === 'number') {
      tabs = __current__[1];
    }

    return [2, tabs, {
      'SwitchCase': 1
    }]
  }
};
