<h1 align="center">
	<img width="320" src="./logo.svg" alt="Polyjuice">
</h1>

[![Build Status](https://travis-ci.org/brenolf/polyjuice.svg)](https://travis-ci.org/brenolf/polyjuice)
[![Coverage Status](https://coveralls.io/repos/brenolf/polyjuice/badge.svg?branch=master&service=github)](https://coveralls.io/github/brenolf/polyjuice?branch=master)
[![Code Climate](https://codeclimate.com/github/brenolf/polyjuice/badges/gpa.svg)](https://codeclimate.com/github/brenolf/polyjuice)
[![npm version](https://badge.fury.io/js/polyjuice.svg)](http://badge.fury.io/js/polyjuice)
> Converts `.jshintrc` and `.jscsrc` files into `.eslintrc` and vice-versa

Polyjuice is a utility that converts [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/) files into [ESLint](http://eslint.org/) files and the other way around.

## Install
`$ npm install --save-dev polyjuice`

## Usage
```js
var polyjuice = require('polyjuice')

var to_eslint = {
  jshint: polyjuice.from.jshint(['./.jshintrc']),
  jscs  : polyjuice.from.jscs(['./.jscsrc']),
  both  : polyjuice.to.eslint(['./.jshintrc'], ['./.jscsrc'])
}

var to_jscs_and_jshint = {
  jshint: polyjuice.to.jshint(['./.eslintrc')],
  jscs  : polyjuice.to.jscs(['./.eslintrc')],
  both  : polyjuice.from.eslint(['./.eslintrc'])
}
```

> When using `polyjuice.from.eslint` an object with keys `jscs` and `jshint` is returned.

## CLI

If installed globally, you can use polyjuice as a command line utility. You can check which rules have been discarded by adding `--discarded` or `-d` to your command.

### To ESLint

You must provide the files to be assessed by using the options `--jshint` and `--jscs`, for instance:

`$ polyjuice --jshint .jshintrc --jscs .jscsrc > .eslintrc`

> Note you are allowed to pass in any number of files

### To JSHint and JSCS

You must provide the file to be assessed by using the option `--eslint` and also which output you want by using either `--to-jshint` or `--to-jscs`, for instance:

`$ polyjuice --eslint .eslintrc --to-jshint > .jshintrc`

> Note you are allowed to pass in any number of files

## Contributing
Contributions are always welcome! If you want to have a better understanding about the conversion files, I encourage you to take a look at [the conversion page](/doc/DICTIONARIES.md). You can also check the rules discarded when [parsing JSCS](/doc/JSCS.md), [parsing JSHint](/doc/JSHINT.md) and [parsing ESLint](/doc/ESLINT.md).

## Versions used
These are the versions used as source of the translation. Therefore, you may expect all rules up to those versions to have been mapped to the target tool.

* ESLint: `v1.7.2`
* JSCS: `v3.0.2`
* JSHint: `v2.9.2`

## License
MIT
