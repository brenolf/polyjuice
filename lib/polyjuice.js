/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict';

var jshint = require('./polyjuice/jshint');
var jscs = require('./polyjuice/jscs');

module.exports.from = {
  jshint: jshint,
  jscs: jscs
}

module.exports.to = {
  eslint: null
}
