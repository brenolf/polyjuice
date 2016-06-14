/**
* @fileoverview Translation for `validateQuoteMarks` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'quotes',
  truthy: function(__current__, value) {
    if (value === '"' || value === true) {
      return [2, 'double']
    }

    if (value === '\'') {
      return [2, 'single']
    }

    var mark = value.mark === '"' ? 'double' : 'single'
    var escape = value.escape

    if (escape) {
      return [2, mark, { avoidEscape: true }]
    }

    return [2, mark]
  }
};
