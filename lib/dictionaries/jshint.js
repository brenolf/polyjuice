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
    name: 'wrap-iife',
    truthy: [2, 'any']
  },

  'indent': {
    name: 'indent',
    truthy: function (value) {
      return [2, value, {'SwitchCase': 1}]
    }
  },

  'iterator': 'no-iterator',

  'latedef': 'no-use-before-define',

  'maxcomplexity': {
    name: 'complexity',
    truthy: function (value) {
      return [2, value]
    }
  },

  'maxdepth': {
    name: 'max-depth',
    truthy: function (value) {
      return [2, value]
    }
  },

  'maxlen': {
    name: 'max-len',
    truthy: function (value) {
      return [2, value]
    }
  },

  'maxparams': {
    name: 'max-params',
    truthy: function (value) {
      return [2, value]
    }
  },

  'maxstatements': {
    name: 'max-statements',
    truthy: function (value) {
      return [2, value]
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
    name: 'quotes',
    truthy: [2, 'single']
  },

  'shadow': {
    name: 'no-shadow',
    test: function (value) {
      switch (value) {
        case true:
          return 0

        case 'inner':
        case false:
          return 2

        default:
          return [2, {
            'builtinGlobals': true,
            'hoist': 'all'
          }]
      }
    }
  },

  'strict': {
    name: 'strict',
    truthy: [2, 'function']
  },

  'undef': 'no-undef',

  'unused': 'no-unused-vars',

  'varstmt': 'no-var',

  'asi': {
    name: 'semi',
    truthy: [2, 'always']
  },

  'debug': 'no-debugger',

  'eqnull': 'no-eq-null',

  'evil': 'no-eval',

  'expr': 'no-unused-expressions',

  'globalstrict': {
    name: 'strict',
    truthy: 0
  },

  'laxbreak': 'linebreak-style',

  'laxcomma': {
    name: 'comma-style',
    truthy: [2, 'last'],
    falsy: [2, 'first']
  },

  'loopfunc': 'no-loop-func',

  'multistr': 'no-multi-str',

  'noyield': 'require-yield',

  'plusplus': 'no-plusplus',

  'proto': 'no-proto',

  'scripturl': 'no-script-url',

  'sub': {
    name: 'dot-notation',
    truthy: 0,
    falsy: 2
  },

  'supernew': ['no-new-func', 'no-new-wrappers'],

  'validthis': 'no-invalid-this',

  'withstmt': 'no-with',

  'elision': 'no-sparse-arrays',

  'freeze': 'no-extend-native',

  'singleGroups': {
    name: 'no-extra-parens',
    truthy: 0,
    falsy: 2
  },

  'boss': {
    name: 'no-cond-assign',
    truthy: [2, 'except-parens']
  }
}
