/**
* @fileoverview Translation for `disallowImplicitTypeConversion` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'no-implicit-coercion',
  truthy: function(__current__, value) {
    var obj = {}

    var counterpart = {
      'boolean': 'boolean',
      'string': 'string',
      'numeric': 'number'
    }

    for (var name in counterpart) {
      obj[counterpart[name]] = (value.indexOf(name) >= 0)
    }

    return [2, obj]
  }
};
