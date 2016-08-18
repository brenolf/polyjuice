/**
* @fileoverview Translation for `disallowEmptyBlocks` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'no-empty',
  truthy: [2, { 'allowEmptyCatch': true }]
};
