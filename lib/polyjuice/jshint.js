/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict'

var fs = require('fs')
var stripJsonComments = require('strip-json-comments')
var dictionary = require('../dictionaries/jshint')
var interpreter = require('./interpreter')
var truth_tbl = require('../assets/eslint_truth_tbl.json')

module.exports = function(filename, log, encoding) {
  encoding = encoding || 'utf8'

  var json = stripJsonComments(fs.readFileSync(filename, encoding))
  var data = JSON.parse(json)

  var output = {}

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
