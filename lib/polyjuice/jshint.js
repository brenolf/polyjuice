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
var objectAssign = require('object-assign')

module.exports = function(filename, log, encoding) {
  encoding = encoding || 'utf8'

  var data = {}

  filename.forEach(function(file) {
    var read = JSON.parse(stripJsonComments(fs.readFileSync(file, encoding)))
    data = objectAssign(data, read)
  })

  var output = {}

  var rulesPath = path.join(__dirname, '../dictionaries/jshint/')

  var dictionary = {}

  fs.readdirSync(rulesPath).forEach(function(name) {
    var rule = path.join(rulesPath, name)

    dictionary[name.split('.')[0]] = require(rule)
  });

  output.env = {}

  dictionary._env.forEach(function(env) {
    var from = env
    var to = env

    if (typeof env !== 'string') {
      from = env[0]
      to = env[1]
    }

    if (from in data && data[from]) {
      output.env[to] = true
    }
  })

  output.globals = data.globals || {}

  output.rules = interpreter(dictionary, data, truth_tbl, log)

  return output
}
