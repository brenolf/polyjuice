/**
* @fileoverview Translation for `validateIndentation` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'indent',
  'truthy': function(__current__, value) {
    value = value.value || value

    if (typeof value === 'string') {
      return [2, 'tab', {'SwitchCase': 1}]
    }

    if (typeof value === 'number') {
      return [2, value, {'SwitchCase': 1}]
    }

    return [2, value, {'SwitchCase': 1}]
  }
};
