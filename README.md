# Polyjuice [![Build Status](https://travis-ci.org/brenolf/polyjuice.svg)](https://travis-ci.org/brenolf/polyjuice)
> Converts `.jshintrc` into `.eslintrc`

Polyjuice is a utility that converts [JSHint](http://jshint.com/) files into [ESLint](http://eslint.org/) files.

## Install
`$ npm install --save-dev polyjuice`

## Usage
```js
var polyjuice = require('polyjuice');
var eslint_json = polyjuice.jshint('./.jshintrc');
```

## CLI
If installed globally, you can use polyjuice as `polyjuice .jshintrc > .eslintrc`.

## Contributing
Contributions are always welcome! If you want to better understand how the json files for conversions work I encourage you to take a look at [the jshint conversion page](/doc/JSHINT.md).

## License
MIT
