/**
* @fileoverview Translation for `disallowSpaceBeforeObjectValues` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'key-spacing',
  truthy: function(__current__) {
    if (!__current__) {
      return [2, {'afterColon': false}]
    }

    __current__[1].afterColon = false

    return __current__
  }
};
