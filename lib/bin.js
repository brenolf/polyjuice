#!/usr/bin/env node

var polyjuice = require('./polyjuice');

var src = process.argv[2];

if (!src) {
  throw new Error(process.argv[1] + ': no file given');
}

var json = JSON.stringify(polyjuice.jshint(src), null, 2)

console.log(json);
