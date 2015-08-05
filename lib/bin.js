#!/usr/bin/env node

var argv = require('argv');
var polyjuice = require('./polyjuice');

var options = [
  {
    name: 'jshint',
    type: 'string',
    description: 'Defines the source file for jshint',
    example: "'polyjuice --jshint .jshintrc'"
  },
  {
    name: 'jscs',
    type: 'string',
    description: 'Defines the source file for jscs',
    example: "'polyjuice --jscs .jscsrc'"
  }
]

var src = argv.option(options).run();

var output = {};

if (src.options.jshint && src.options.jscs) {
  output = polyjuice.to.eslint(src.options.jshint, src.options.jscs);
} else if (src.options.jshint) {
  output = polyjuice.from.jshint(src.options.jshint);
} else if (src.options.jscs) {
  output = polyjuice.from.jscs(src.options.jscs);
}

console.log(JSON.stringify(output, null, 2));
