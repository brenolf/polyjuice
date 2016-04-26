/**
* @fileoverview Translation for `key-spacing` (ESLint) to JSCS
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
    if (value[0] === 0 || value === 0) {
      return {}
    }

    if (value[1].align === 'colon') {
      return {
        requireAlignedObjectValues: true,
        disallowSpaceAfterObjectKeys: {
          allExcept: ['aligned']
        }
      }
    }

    var obj = {}

    if (value[1].afterColon === true) {
      obj.requireSpaceBeforeObjectValues = true
    } else if (value[1].afterColon === false) {
      obj.disallowSpaceBeforeObjectValues = true
    }

    if (value[1].beforeColon === true) {
      obj.requireSpaceAfterObjectKeys = true
    } else if (value[1].beforeColon === false) {
      obj.disallowSpaceAfterObjectKeys = true
    }

    return obj
  }
};
