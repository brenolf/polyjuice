/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

'use strict';

var Reader = require('./reader');

module.exports = function (dictionary, json_data, truth_tbl, discarded) {
  var output = {};
  
  discarded = discarded || [];

  var fn = function (input) {
    if (typeof input === 'number') {
      return true;
    }

    return input ? true : false;
  };

  var reader = new Reader(dictionary, fn, truth_tbl, output);

  for (var name in json_data) {
    var tuple = reader.get(name, json_data[name]);

    if (Object.keys(tuple).length === 0) {
      discarded.push(name);
    }

    for (var newRule in tuple) {
      output[newRule] = tuple[newRule];
    }
  }

  return output;
};
