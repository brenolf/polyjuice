/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict';

var fs = require('fs');
var dictionary = require('../dictionaries/jscs');
var interpreter = require('./interpreter');
var truth_tbl = require('../assets/eslint_truth_tbl.json');

module.exports = function (filename, log, encoding) {
  encoding = encoding || 'utf8';

  var data = JSON.parse(fs.readFileSync(filename, encoding));

  var output = {};

  output.rules = interpreter(dictionary, data, truth_tbl, log);

  return output;
};
