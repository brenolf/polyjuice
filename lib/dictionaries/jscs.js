module.exports = {
  'disallowAnonymousFunctions': 'func-names',

  'disallowCommaBeforeLineBreak': {
    name: 'comma-style',
    truthy: [2, 'first']
  },

  'disallowCurlyBraces': {
    name: 'curly',
    truthy: [2, 'multi-line']
  },

  'disallowDanglingUnderscores': 'no-underscore-dangle',

  'disallowEmptyBlocks': 'no-empty',

  'disallowFunctionDeclarations': {
    name: 'func-style',
    truthy: [2, 'expression']
  },

  'requireFunctionDeclarations': {
    name: 'func-style',
    truthy: [2, 'declaration']
  },

  'disallowIdentifierNames': {
    name: 'id-match',
    truthy: function (value) {
      return [2, ('^(' + value.join('|') + ')$'), {'properties': true}]
    }
  },

  'disallowImplicitTypeConversion': {
    name: 'no-implicit-coercion',
    truthy: function (value) {
      var obj = {}

      var counterpart = {
        'boolean': 'boolean',
        'string': 'string',
        'numeric': 'number'
      }

      value.forEach(function (type) {
        if (type in counterpart) {
          obj[counterpart[type]] = true
        }
      })

      return [2, obj]
    }
  },

  'disallowKeywordsInComments': {
    name: 'no-warning-comments',
    truthy: function (value) {
      var terms = (value === true) ? ['fixme', 'todo'] : value

      if (typeof terms === 'string') {
        terms = [terms]
      }

      return [2, {'terms': terms, 'location': 'anywhere'}]
    }
  },

  'disallowKeywords': {
    name: 'no-with',
    truthy: function (value) {
      return value.indexOf('with') > -1 ? 2 : 0
    }
  },

  'disallowMixedSpacesAndTabs': {
    name: 'no-mixed-spaces-and-tabs',
    true: 2,
    smart: [2, 'smart-tabs']
  },

  'disallowMultipleLineBreaks': 'no-multiple-empty-lines',

  'disallowMultipleLineStrings': 'no-multi-str',

  'disallowMultipleSpaces': 'no-multi-spaces',

  'disallowMultipleVarDecl': {
    name: 'one-var',
    truthy: function (value) {
      if (value === true || value.strict) {
        return [2, 'never']
      }

      return [2, { uninitialized: 'always', initialized: 'never' }]
    }
  },

  'disallowKeywordsOnNewLine': 'brace-style',

  'disallowOperatorBeforeLineBreak': {
    name: 'operator-linebreak',
    truthy: [2, 'before']
  },

  'disallowPaddingNewlinesInBlocks': {
    name: 'padded-blocks',
    truthy: [2, 'never']
  },

  'disallowParenthesesAroundArrowParam': {
    name: 'arrow-parens',
    truthy: 0,
    falsy: [2, 'always']
  },

  'disallowQuotedKeysInObjects': {
    name: 'quote-props',
    truthy: function (value) {
      if (value !== 'allButReserved') {
        return [2, 'as-needed']
      }

      return [2, 'as-needed', {'keywords': true}]
    }
  },

  'disallowSpaceAfterObjectKeys': {
    name: 'key-spacing',
    truthy: function (value) {
      if (value.allExcept && value.allExcept[0] === 'aligned') {
        return [2, { 'align': 'colon' }]
      }

      return [2, { 'beforeColon': false, 'afterColon': true }]
    }
  },

  'disallowSpaceBeforeBlockStatements': {
    name: 'space-before-blocks',
    truthy: [2, 'never']
  },

  'disallowSpaceBeforeComma': {
    name: 'comma-spacing',
    truthy: [2, {'before': false}]
  },

  'disallowSpaceBeforeObjectValues': {
    name: 'key-spacing',
    truthy: function () {
      if (!this.value) {
        return [2, {'afterColon': false}]
      }

      this.value[1].afterColon = false

      return this.value
    }
  },

  'disallowSpaceBeforeSemicolon': {
    name: 'semi-spacing',
    truthy: [2, {'before': false, 'after': true}]
  },

  'disallowSpacesInFunctionDeclaration': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'never']
      }
    }

    return {}
  },

  'disallowSpacesInFunctionExpression': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'never']
      }
    }

    return {}
  },

  'disallowSpacesInFunction': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'never']
      }
    }

    return {}
  },

  'disallowSpacesInNamedFunctionExpression': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'never']
      }
    }

    return {}
  },

  'disallowSpacesInsideArrayBrackets': {
    name: 'array-bracket-spacing',
    truthy: function (value) {
      var rule = this.value || [2, 'never', {}]

      rule[2].singleValue = true

      if (value === 'nested') {
        rule[2].arraysInArrays = true
      }

      return rule
    }
  },

  'disallowSpacesInsideObjectBrackets': {
    name: 'array-bracket-spacing',
    truthy: function (value) {
      var rule = this.value || [2, 'never', {}]

      rule[2].singleValue = true

      if (value === 'nested') {
        rule[2].objectsInArrays = true
      }

      return rule
    }
  },

  'disallowSpacesInsideParentheses': {
    name: 'space-in-parens',
    truthy: function (value) {
      if (value === true) {
        return [2, 'never']
      }

      var exceptions = []

      var only = value.only

      var signals = ['{}', '()', '[]']

      signals.forEach(function (str) {
        if (only.indexOf(str[0]) > -1 || only.indexOf(str[1]) > -1) {
          if (exceptions.indexOf(str) === -1) {
            exceptions.push(str)
          }
        }
      })

      return [2, 'never', { 'exceptions': exceptions }]
    }
  },

  'disallowTrailingComma': {
    name: 'comma-dangle',
    truthy: [2, 'never']
  },

  'disallowTrailingWhitespace': {
    name: 'no-trailing-spaces',
    truthy: function (value) {
      return (value === true) ? 2 : [2, { 'skipBlankLines': true }]
    }
  },

  'disallowYodaConditions': {
    name: 'yoda',
    truthy: [2, 'never']
  },

  'jsDoc': 'valid-jsdoc',

  'maximumLineLength': {
    name: 'max-len',
    truthy: function (value) {
      return value.value ? [2, value.value] : [2, value]
    }
  },

  'requireAlignedObjectValues': {
    name: 'key-spacing',
    truthy: [2, { 'align': 'colon' }]
  },

  'requireCamelCaseOrUpperCaseIdentifiers': {
    name: 'camelcase',
    truthy: function (value) {
      var checkProperties = (value === true) ? 'never' : 'always'

      return [2, { 'properties': checkProperties }]
    }
  },

  'requireCapitalizedConstructors': {
    name: 'new-cap',
    truthy: function (value) {
      if (value === true) {
        return 2
      }

      return [2, {
        'newIsCapExceptions': value.allExcept,
        'capIsNewExceptions': value.allExcept
      }]
    }
  },

  'requireCommaBeforeLineBreak': {
    name: 'comma-style',
    truthy: [2, 'last']
  },

  'requireCurlyBraces': {
    name: 'curly',
    truthy: [2, 'all']
  },

  'requireDotNotation': {
    name: 'dot-notation',
    truthy: function (value) {
      var rules = {}

      if (value === true) {
        return 2
      }

      if (value === 'except_snake_case') {
        return [2, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }]
      }

      if (value.allExcept.indexOf('keywords') > -1) {
        rules.allowKeywords = true
      }

      if (value.allExcept.indexOf('snake_case') > -1) {
        rules.allowPattern = '^[a-z]+(_[a-z]+)+$'
      }

      return [2, rules]
    }
  },

  'requireKeywordsOnNewLine': {
    name: 'brace-style',
    truthy: [2, 'stroustrup', { 'allowSingleLine': true }]
  },

  'requireLineBreakAfterVariableAssignment': {
    name: 'newline-after-var',
    truthy: [2, 'always']
  },

  'requireLineFeedAtFileEnd': 'eol-last',

  'requireMultipleVarDecl': {
    name: 'one-var',
    truthy: [2, 'never']
  },

  'requireNamedUnassignedFunctions': 'func-names',

  'requireOperatorBeforeLineBreak': {
    name: 'operator-linebreak',
    truthy: [2, 'after']
  },

  'requirePaddingNewLineAfterVariableDeclaration': {
    name: 'newline-after-var',
    truthy: [2, 'always']
  },

  'disallowPaddingNewLinesBeforeLineComments': {
    name: 'lines-around-comment',
    truthy: [2, { 'beforeLineComment': false }]
  },

  'requirePaddingNewLinesBeforeLineComments': {
    name: 'lines-around-comment',
    truthy: [2, { 'beforeLineComment': true }]
  },

  'requirePaddingNewlinesInBlocks': {
    name: 'padded-blocks',
    truthy: [2, 'always']
  },

  'requireParenthesesAroundArrowParam': 'arrow-parens',

  'requireParenthesesAroundIIFE': 'wrap-iife',

  'requireQuotedKeysInObjects': {
    name: 'quote-props',
    truthy: [2, 'always']
  },

  'requireSemicolons': {
    name: 'semi',
    truthy: [2, 'always']
  },

  'disallowSemicolons': {
    name: 'semi',
    truthy: [2, 'never']
  },

  'requireSpaceAfterBinaryOperators': {
    name: 'space-infix-ops',
    truthy: 2
  },

  'requireSpaceAfterLineComment': {
    name: 'spaced-comment',
    truthy: [2, 'always']
  },

  'disallowSpaceAfterLineComment': {
    name: 'spaced-comment',
    truthy: [2, 'never']
  },

  'requireSpaceAfterObjectKeys': {
    name: 'key-spacing',
    truthy: function () {
      if (this.value) {
        this.value[1].beforeColon = true

        return this.value
      }

      return [2, { 'beforeColon': true }]
    }
  },

  'disallowSpaceAfterPrefixUnaryOperators': {
    name: 'space-unary-ops',
    truthy: 0,
    falsy: 2
  },

  'requireSpaceAfterPrefixUnaryOperators': 'space-unary-ops',

  'requireSpaceBeforeBlockStatements': {
    name: 'space-before-blocks',
    truthy: [2, 'always']
  },

  'requireSpaceBeforeComma': {
    name: 'comma-spacing',
    truthy: function () {
      if (this.value) {
        this.value[1].before = true

        return this.value
      }

      return [2, {'before': true}]
    }
  },

  'requireSpaceBeforeObjectValues': {
    name: 'key-spacing',
    truthy: function () {
      if (this.value) {
        this.value[1].afterColon = true

        return this.value
      }

      return [2, { 'afterColon': true }]
    }
  },

  'requireSpacesInFunctionDeclaration': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'always']
      }
    }

    return {}
  },

  'requireSpacesInFunctionExpression': function (value) {
    if (value.beforeOpeningRoundBrace) {
      return {
        'space-before-function-paren': [2, 'always']
      }
    }

    return {}
  },

  'disallowSpacesInCallExpression': 'no-spaced-func',

  'requireSpacesInsideArrayBrackets': {
    name: 'array-bracket-spacing',
    truthy: function (value) {
      if (value === 'all' || value === true) {
        return [2, 'always']
      }

      value = value.allExcept

      var rules = {}

      if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
        rules.objectsInArrays = false
      }

      if (value.indexOf('[') > -1 || value.indexOf(']') > -1) {
        rules.arraysInArrays = false
      }

      return [2, 'always', rules]
    }
  },

  'requireSpacesInsideObjectBrackets': {
    name: 'array-bracket-spacing',
    truthy: function (value) {
      if (value === 'all' || value === true) {
        return [2, 'always']
      }

      value = value.allExcept

      var rules = {}

      if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
        rules.objectsInArrays = false
      }

      if (value.indexOf('[') > -1 || value.indexOf(']') > -1) {
        rules.arraysInArrays = false
      }

      return [2, 'always', rules]
    }
  },

  'requireSpacesInsideParentheses': {
    name: 'space-in-parens',
    truthy: function (value) {
      if (value === 'all') {
        return [2, 'always']
      }

      var exceptions = []

      var except = value.except

      var signals = ['{}', '()', '[]']

      signals.forEach(function (str) {
        if (except.indexOf(str[0]) > -1 || except.indexOf(str[1]) > -1) {
          if (exceptions.indexOf(str) === -1) {
            exceptions.push(str)
          }
        }
      })

      return [2, 'always', { 'exceptions': exceptions }]
    }
  },

  'requireSpread': 'prefer-spread',

  'requireTemplateStrings': {
    name: 'quotes',
    truthy: [2, 'backtick']
  },

  'requireTrailingComma': {
    name: 'comma-dangle',
    truthy: function (value) {
      return [2, (value === true ? 'always' : 'always-multiline')]
    }
  },

  'requireVarDeclFirst': 'var-on-top',

  'requireYodaConditions': {
    name: 'yoda',
    truthy: [2, 'always']
  },

  'safeContextKeyword': {
    name: 'consistent-this',
    truthy: function (value) {
      if (typeof value === 'string') {
        return [2, value]
      }

      return [2, value[0]]
    }
  },

  'validateIndentation': {
    name: 'indent',
    truthy: function (value) {
      value = value.value || value

      if (typeof value === 'string') {
        return [2, 'tab', {'SwitchCase': 1}]
      }

      if (typeof value === 'number') {
        return [2, value, {'SwitchCase': 1}]
      }

      return [2, value, {'SwitchCase': 1}]
    }
  },

  'validateLineBreaks': {
    name: 'linebreak-style',
    truthy: function (value) {
      var sys = (value === 'CLRF') ? 'windows' : 'unix'

      return [2, sys]
    }
  },

  'validateQuoteMarks': {
    name: 'quotes',
    truthy: function (value) {
      if (value === '"' || value === true) {
        return [2, 'double']
      }

      if (value === '\'') {
        return [2, 'single']
      }

      var mark = value.mark === '"' ? 'double' : 'single'
      var escape = value.escape

      if (escape) {
        return [2, mark, 'avoid-escape']
      }

      return [2, mark]
    }
  },

  'disallowSpaceBeforeKeywords': {
    name: 'keyword-spacing',
    truthy: function (value) {
      var rule = this.value || [2, {}]

      var overrides = rule[1].overrides = (rule[1].overrides || {})

      if (value === true) {
        rule[1].before = false

        return rule
      }

      value.forEach(function (keyword) {
        overrides[keyword] = overrides[keyword] || {}
        overrides[keyword].before = false
      })

      return rule
    }
  },

  'requireSpaceBeforeKeywords': {
    name: 'keyword-spacing',
    truthy: function (value) {
      var rule = this.value || [2, {}]

      var overrides = rule[1].overrides = (rule[1].overrides || {})

      if (value === true) {
        rule[1].before = true

        return rule
      }

      value.forEach(function (keyword) {
        overrides[keyword] = overrides[keyword] || {}
        overrides[keyword].before = true
      })

      return rule
    }
  },

  'disallowSpaceAfterKeywords': {
    name: 'keyword-spacing',
    truthy: function (value) {
      var rule = this.value || [2, {}]

      var overrides = rule[1].overrides = (rule[1].overrides || {})

      if (value === true) {
        rule[1].after = false

        return rule
      }

      value.forEach(function (keyword) {
        overrides[keyword] = overrides[keyword] || {}
        overrides[keyword].after = false
      })

      return rule
    }
  },

  'requireSpaceAfterKeywords': {
    name: 'keyword-spacing',
    truthy: function (value) {
      var rule = this.value || [2, {}]

      var overrides = rule[1].overrides = (rule[1].overrides || {})

      if (value === true) {
        rule[1].after = true

        return rule
      }

      value.forEach(function (keyword) {
        overrides[keyword] = overrides[keyword] || {}
        overrides[keyword].after = true
      })

      return rule
    }
  }
}
