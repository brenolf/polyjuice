module.exports = {
  _env: ['browser', 'jasmine', 'jquery', 'mocha', 'node',
  ['phantom', 'phantomjs'], 'prototypejs', 'qunit', 'shelljs', 'worker'],

  'bitwise': 'no-bitwise',

  'camelcase': 'camelcase',

  'curly': 'curly',

  'eqeqeq': 'eqeqeq',

  'forin': 'guard-for-in',

  'funcscope': 'block-scoped-var',

  'immed': {
    _name: 'wrap-iife',
    _truthy: [2, 'any']
  },

  'indent': {
    _name: 'indent',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'iterator': 'no-iterator',

  'latedef': 'no-use-before-define',

  'maxcomplexity': {
    _name: 'complexity',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'maxdepth': {
    _name: 'max-depth',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'maxlen': {
    _name: 'max-len',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'maxparams': {
    _name: 'max-params',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'maxstatements': {
    _name: 'max-statements',
    _truthy: function (value) {
      return [2, value];
    }
  },

  'newcap': 'new-cap',

  'noarg': 'no-caller',

  'nocomma': 'no-sequences',

  'noempty': 'no-empty',

  'nonbsp': 'no-irregular-whitespace',

  'nonew': 'no-new',

  'notypeof': 'valid-typeof',

  'quotmark': {
    _name: 'quotes',
    _truthy: [2, 'single']
  },

  'shadow': {
    _name: 'no-shadow',
    _test: function (value) {
      switch (value) {
        case true:
          return 0;

        case 'inner':
        case false:
          return 2;

        default:
          return [2, {
            'builtinGlobals': true,
            'hoist': 'all'
          }];
      }
    }
  },

  'strict': {
    _name: 'strict',
    _truthy: [2, 'function']
  },

  'undef': 'no-undef',

  'unused': 'no-unused-vars',

  'varstmt': 'no-var',

  'asi': {
    _name: 'semi',
    _truthy: [2, 'always']
  },

  'debug': 'no-debuger',

  'eqnull': 'no-eq-null',

  'evil': 'no-eval',

  'expr': 'no-unused-expressions',

  'globalstrict': {
    _name: 'strict',
    _truthy: 0
  },

  'laxbreak': 'linebreak-style',

  'laxcomma': {
    _name: 'comma-style',
    _truthy: [2, 'first'],
    _falsy: [2, 'last']
  },

  'loopfunc': 'no-loop-func',

  'multistr': 'no-multi-str',

  'noyield': 'require-yield',

  'plusplus': 'no-plusplus',

  'proto': 'no-proto',

  'scripturl': 'no-script-url',

  'sub': 'dot-notation',

  'supernew': ['no-new-func', 'no-new-wrappers'],

  'validthis': 'no-invalid-this',

  'withstmt': 'no-with',

  'elision': 'no-sparse-arrays'
};
