/**
* @fileoverview Translation for `disallowKeywordsInComments` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  'name': 'no-warning-comments',
  'truthy': function(__current__, value) {
    var terms = (value === true) ? ['fixme', 'todo'] : value

    if (typeof terms === 'string') {
      terms = [terms]
    }

    return [2, {'terms': terms, 'location': 'anywhere'}]
  }
};
