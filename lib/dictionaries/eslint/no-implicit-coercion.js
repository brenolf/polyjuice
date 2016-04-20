/**
* @fileoverview Translation for `no-implicit-coercion` (ESLint) to JSCS
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'target': 'jscs',
  'name': 'disallowImplicitTypeConversion',
  'truthy': function(__current__, value) {
    var list = []

    value = value[1]

    var counterpart = {
      'boolean': 'boolean',
      'string': 'string',
      'number': 'numeric'
    }

    for (var type in value) {
      if (type in counterpart) {
        list.push(counterpart[type])
      }
    }

    return list
  }
};
