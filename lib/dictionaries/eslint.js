module.exports = {
  'comma-dangle': {
    target: 'jscs',
    name: '',
    test: function (value) {
      if (value === 2 || value[1] === 'never') {
        return { disallowTrailingComma: true }
      }

      return { requireTrailingComma: true }
    }
  },

  'no-cond-assign': {
    target: 'jshint',
    name: 'boss',
    truthy: true
  },

  'no-console': {
    target: 'jscs',
    name: 'predef',
    truthy: function () {
      this.value = this.value || []

      this.value.push('-console')
    }
  },

  'no-constant-condition': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-control-regex': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-debugger': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-dupe-args': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-dupe-keys': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-duplicate-case': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-empty-character-class': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-empty': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-ex-assign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-extra-boolean-cast': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-extra-parens': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-extra-semi': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-func-assign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-inner-declarations': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-invalid-regexp': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-irregular-whitespace': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-negated-in-lhs': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-obj-calls': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-regex-spaces': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-sparse-arrays': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-unexpected-multiline': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-unreachable': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'use-isnan': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'valid-jsdoc': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'valid-typeof': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'accessor-pairs': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'block-scoped-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'complexity': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'consistent-return': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'curly': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'default-case': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'dot-location': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'dot-notation': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'eqeqeq': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'guard-for-in': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-alert': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-caller': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-div-regex': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-else-return': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-empty-label': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-empty-pattern': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-eq-null': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-eval': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-extend-native': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-extra-bind': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-fallthrough': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-floating-decimal': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-implicit-coercion': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-implied-eval': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-invalid-this': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-iterator': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-labels': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-lone-blocks': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-loop-func': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-magic-numbers': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-multi-spaces': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-multi-str': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-native-reassign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-new-func': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-new-wrappers': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-new': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-octal-escape': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-octal': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-param-reassign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-process-env': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-proto': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-redeclare': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-return-assign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-script-url': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-self-compare': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-sequences': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-throw-literal': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-unused-expressions': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-useless-call': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-useless-concat': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-void': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-warning-comments': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-with': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'radix': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'vars-on-top': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'wrap-iife': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'yoda': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'strict': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'init-declarations': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-catch-shadow': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-delete-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-label-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-shadow-restricted-names': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-shadow': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-undef-init': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-undef': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-undefined': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-unused-vars': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-use-before-define': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'callback-return': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'global-require': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'handle-callback-err': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-mixed-requires': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-new-require': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-path-concat': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-process-exit': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-restricted-modules': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-sync': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'array-bracket-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'block-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'brace-style': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'camelcase': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'comma-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'comma-style': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'computed-property-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'consistent-this': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'eol-last': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'func-names': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'func-style': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'id-length': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'id-match': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'indent': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'jsx-quotes': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'key-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'linebreak-style': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'lines-around-comment': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'max-nested-callbacks': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'new-cap': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'new-parens': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'newline-after-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-array-constructor': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-continue': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-inline-comments': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-lonely-if': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-mixed-spaces-and-tabs': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-multiple-empty-lines': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-negated-condition': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-nested-ternary': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-new-object': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-restricted-syntax': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-spaced-func': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-ternary': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-trailing-spaces': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-underscore-dangle': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-unneeded-ternary': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'object-curly-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'one-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'operator-assignment': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'operator-linebreak': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'padded-blocks': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'quote-props': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'quotes': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'require-jsdoc': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'semi-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'semi': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'sort-vars': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-after-keywords': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-before-blocks': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-before-function-paren': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-before-keywords': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-in-parens': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-infix-ops': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-return-throw-case': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'space-unary-ops': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'spaced-comment': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'wrap-regex': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'arrow-parens': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'arrow-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'constructor-super': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'generator-star-spacing': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-class-assign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-const-assign': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-dupe-class-members': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-this-before-super': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-var': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'object-shorthand': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'prefer-arrow-callback': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'prefer-const': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'prefer-reflect': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'prefer-spread': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'prefer-template': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'require-yield': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'max-depth': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'max-len': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'max-params': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'max-statements': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-bitwise': {
    target: 'jscs',
    name: '',
    truthy: []
  },

  'no-plusplus': {
    target: 'jscs',
    name: '',
    truthy: []
  }
}
