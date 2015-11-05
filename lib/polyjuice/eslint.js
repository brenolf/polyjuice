/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var fs = require('fs')
var stripJsonComments = require('strip-json-comments')
var dictionary = require('../dictionaries/eslint')
var interpreter = require('./interpreter')
var truth_tbl = require('../assets/jshint_jscs_truth_tbl.json')

module.exports = function (filename, log, encoding) {
  encoding = encoding || 'utf8'

  var json = stripJsonComments(fs.readFileSync(filename, encoding))
  var data = JSON.parse(json)

  return interpreter(dictionary, data.rules, truth_tbl, log)
}
