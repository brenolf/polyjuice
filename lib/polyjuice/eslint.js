/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var CLIEngine = require('eslint').CLIEngine
var dictionary = require('../dictionaries/eslint')
var interpreter = require('./interpreter')
var truth_tbl = require('../assets/jshint_jscs_truth_tbl.json')

module.exports = function(filename, log) {
  var cli = new CLIEngine()
  var data = cli.getConfigForFile(filename)

  return interpreter(dictionary, data.rules, truth_tbl, log)
}
