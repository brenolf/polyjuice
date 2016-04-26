/**
* @fileoverview Translation for `requireCamelCaseOrUpperCaseIdentifiers` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'camelcase',
  truthy: function(__current__, value) {
    var checkProperties = (value === true) ? 'never' : 'always'

    return [2, { 'properties': checkProperties }]
  }
};
