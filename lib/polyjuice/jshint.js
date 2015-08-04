/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict';

var fs = require('fs');
var dictionary = require('../dictionaries/jshint.json');

module.exports = function (filename, encoding) {
  encoding = encoding || 'utf8';

  var data = JSON.parse(fs.readFileSync(filename, encoding));

  var output = {};

  output.env = {};
  output.rules = {};

  if (data.globals) {
    output.globals = data.globals;
  }

  dictionary._environments.forEach(function (env) {
    if (env in data) {
      output.env[env] = data[env];
    }
  });

  for (var rule in data) {
    if (!(rule in dictionary)) {
      continue;
    }

    var values = dictionary[rule];

    if (typeof values !== 'object' || !values.length) {
      values = [values];
    }

    var length = values.length;

    for (var i = 0; i < length; i++) {
      var value = values[i];
      var name = value._name || value;

      if (output.rules[name] && value._override !== true) {
        continue;
      }

      var content = value[data[rule]] || data[rule];

      if (typeof data[rule] === 'number') {
        content = data[rule];
      } else if (typeof content === 'boolean') {
        content = Number(content) * 2;
      }

      output.rules[name] = content;
    }
  }

  return output;
};
