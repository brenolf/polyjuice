/**
* @fileoverview Translation for `no-warning-comments` (ESLint) to JSCS
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
  name: 'disallowKeywordsInComments',
  truthy: function(__current__, value) {
    return (value[1] && value[1].terms) ? value[1].terms : []
  }
};
