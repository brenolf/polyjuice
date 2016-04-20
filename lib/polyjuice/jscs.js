/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var fs = require('fs')
var path = require('path')
var stripJsonComments = require('strip-json-comments')
var interpreter = require('./interpreter')
var truth_tbl = require('../assets/eslint_truth_tbl.json')

module.exports = function(filename, log, encoding) {
  encoding = encoding || 'utf8'

  var json = stripJsonComments(fs.readFileSync(filename, encoding))
  var data = JSON.parse(json)

  var output = {}

  var rulesPath = path.join(__dirname, '../dictionaries/jscs/')

  var dictionary = {}

  fs.readdirSync(rulesPath).forEach(function(name) {
    var rule = path.join(rulesPath, name)

    dictionary[name.split('.')[0]] = require(rule)
  });

  output.rules = interpreter(dictionary, data, truth_tbl, log)

  return output
}
