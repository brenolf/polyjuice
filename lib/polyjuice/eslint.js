/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var fs = require('fs')
var path = require('path')
var CLIEngine = require('eslint').CLIEngine
var interpreter = require('./interpreter')
var truth_tbl = require('../assets/jshint_jscs_truth_tbl.json')
var objectAssign = require('object-assign')

module.exports = function(filename, log) {
  var cli = new CLIEngine()
  var data = {}

  filename.forEach(function(file) {
    var read = cli.getConfigForFile(file)
    data = objectAssign(data, read.rules)
  })

  var rulesPath = path.join(__dirname, '../dictionaries/eslint/')

  var dictionary = {}

  fs.readdirSync(rulesPath).forEach(function(name) {
    var rule = path.join(rulesPath, name)

    dictionary[name.split('.')[0]] = require(rule)
  })

  return interpreter(dictionary, data, truth_tbl, log)
}
