#!/usr/bin/env node

var argv = require('argv');
var polyjuice = require('./polyjuice');

var options = [
  {
    name: 'jshint',
    type: 'string',
    description: 'Defines the source file for jshint',
    example: '\'polyjuice --jshint=.jshintrc\''
  },
  {
    name: 'jscs',
    type: 'string',
    description: 'Defines the source file for jscs',
    example: '\'polyjuice --jscs=.jscsrc\''
  },
  {
    name: 'discarded',
    short: 'd',
    type: 'string',
    description: 'Shows the discarded rules',
    example: '\'polyjuice [-d|--discarded]\''
  }
];

var src = argv.option(options).run();

var output = {};

var discarded = [];

if (src.options.jshint && src.options.jscs) {
  output = polyjuice.to.eslint(src.options.jshint, src.options.jscs, discarded);
} else if (src.options.jshint) {
  output = polyjuice.from.jshint(src.options.jshint, discarded);
} else if (src.options.jscs) {
  output = polyjuice.from.jscs(src.options.jscs, discarded);
} else {
  output = null;
  argv.help();
}

if (src.options.discarded) {
  discarded.forEach(function (rule) {
    console.log(rule);
  });

  if (discarded.length === 0) {
    console.log('No rule has been discarded');
  }
} else if (output !== null) {
  console.log(JSON.stringify(output, null, 2));
}
