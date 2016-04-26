/**
* @fileoverview Translation for `space-in-parens` (ESLint) to JSCS
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

    var obj = {}

    var list = null

    if (value[2]) {
      list = value[2].exceptions.join('').split('')
    }

    if (value[1] === 'never') {
      obj.disallowSpacesInsideParentheses = true

      if (list) {
        obj.disallowSpacesInsideParentheses = {
          only: list
        }
      }
    } else {
      obj.requireSpacesInsideParentheses = 'all'

      if (list) {
        obj.requireSpacesInsideParentheses = {
          all: true,
          except: list
        }
      }
    }

    return obj
  }
};
