/**
* @fileoverview Translation for `disallowSpaceAfterKeywords` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'keyword-spacing',
  'truthy': function(__current__, value) {
    var rule = __current__ || [2, {}]

    var overrides = rule[1].overrides = (rule[1].overrides || {})

    if (value === true) {
      rule[1].after = false

      return rule
    }

    value.forEach(function(keyword) {
      overrides[keyword] = overrides[keyword] || {}
      overrides[keyword].after = false
    })

    return rule
  }
};
