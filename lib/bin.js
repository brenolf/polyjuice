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

var jshint = null;
var jscs = null;
var output = null;

if (src.options.jshint) {
  jshint = polyjuice.from.jshint(src.options.jshint);
}

if (src.options.jscs) {
  jscs = polyjuice.from.jscs(src.options.jscs);
}

if (jshint && jscs) {
  output = jshint;

  for (var name in jscs.rules) {
    output.rules[name] = jscs.rules[name];
  }
}

output = output || jshint || jscs;

var json = JSON.stringify(output, null, 2);

console.log(json);
