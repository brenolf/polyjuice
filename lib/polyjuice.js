/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var jshint = require('./polyjuice/jshint')
var jscs = require('./polyjuice/jscs')
var eslint = require('./polyjuice/eslint')

module.exports.from = {
  jshint: jshint,
  jscs: jscs,
  eslint: eslint
}

module.exports.to = {
  eslint: function(jshint_src, jscs_src, log) {
    var jshint_json = jshint(jshint_src, log)
    var jscs_json = jscs(jscs_src, log)

    for (var name in jscs_json.rules) {
      jshint_json.rules[name] = jscs_json.rules[name]
    }

    return jshint_json
  },

  jscs: function(eslint_src, log) {
    var results = eslint(eslint_src, log)

    return results.jscs || {}
  },

  jshint: function(eslint_src, log) {
    var results = eslint(eslint_src, log)

    return results.jshint || {}
  }
}
