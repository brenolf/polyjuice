# Polyjuice [![Build Status](https://travis-ci.org/brenolf/polyjuice.svg)](https://travis-ci.org/brenolf/polyjuice) [![npm version](https://badge.fury.io/js/polyjuice.svg)](http://badge.fury.io/js/polyjuice)
> Converts `.jshintrc` and `.jscs` files into `.eslintrc`

Polyjuice is a utility that converts [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/) files into [ESLint](http://eslint.org/) files.

## Install
`$ npm install --save-dev polyjuice`

## Usage
```js
var polyjuice = require('polyjuice');

var eslint_json = {
  jshint: polyjuice.from.jshint('./.jshintrc'),
  jscs  : polyjuice.from.jscs('./.jscs'),
  both  : polyjuice.to.eslint('./.jshintrc', './.jscs')
}
```

## CLI
If installed globally, you can use polyjuice as a command line utility. You must provide the files to be assessed by using the options `--jshint` and `--jscs`, for instance:

`$ polyjuice --jshint=.jshintrc --jscs=.jscsrc > .eslintrc`

You can also check which rules have been discarded by adding `--discarded` or `-d` to your command.

## Contributing
Contributions are always welcome! If you want to have a better understanding about the conversion files, I encourage you to take a look at [the conversion page](/doc/DICTIONARIES.md). You can also check the rules discarded when [parsing JSCS](/doc/JSCS.md) and when [parsing JSHint](/doc/JSHINT.md).

## License
MIT
