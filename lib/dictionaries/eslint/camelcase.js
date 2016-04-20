/**
* @fileoverview Translation for `camelcase` (ESLint) to JSCS
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
  'name': 'requireCamelCaseOrUpperCaseIdentifiers',
  'truthy': function(__current__, value) {
    if (value[1] && value[1].properties === 'never') {
      return 'ignoreProperties'
    }

    return true
  }
};
