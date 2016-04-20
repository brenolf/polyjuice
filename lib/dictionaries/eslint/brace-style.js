/**
* @fileoverview Translation for `brace-style` (ESLint) to JSCS
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
  'eval': function(__current__, value) {
    var spacedKeywords = ['do', 'for', 'if', 'else', 'switch', 'case', 'try',
    'catch', 'finally', 'void', 'while', 'with', 'return', 'typeof',
    'function']

    if (value[0] > 0 && value[1] === 'stroustrup'
        && value[2] && value[2].allowSingleLine) {
      return { requireKeywordsOnNewLine: spacedKeywords }
    }

    return { disallowKeywordsOnNewLine: spacedKeywords }
  }
};
