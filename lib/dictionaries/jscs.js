module.exports = {
  'disallowAnonymousFunctions': 'func-names',

  'disallowCommaBeforeLineBreak': {
    _name: 'comma-style',
    _truthy: [2, 'first']
  },

  'disallowCurlyBraces': {
    _name: 'curly',
    _truthy: [2, 'multi-line']
  },

  'disallowDanglingUnderscores': 'no-underscore-dangle',

  'disallowEmptyBlocks': 'no-empty',

  'disallowFunctionDeclarations': {
    _name: 'func-style',
    _truthy: [2, 'expression']
  },

  'disallowIdentifierNames': {
    _name: 'id-match',
    _truthy: function (value) {
      return [2, ('^(' + value.join('|') + ')$'), {'properties': true}];
    }
  },

  'disallowImplicitTypeConversion': {
    _name: 'no-implicit-coercion',
    _truthy: function (value) {
      var obj = {};

      value.forEach(function (type) {
        obj[type] = true;
      });

      return [2, obj];
    }
  },

  'disallowKeywordsInComments': {
    _name: 'no-warning-comments',
    _truthy: function (value) {
      var terms = (value === true) ? ['fixme', 'todo'] : value;

      return [2, {'terms': terms, 'location': 'anywhere'}];
    }
  },

  'disallowKeywords': {
    _name: 'no-with',
    _truthy: function (value) {
      return value.indexOf('with') > -1 ? 2 : 0;
    }
  },

  'disallowMixedSpacesAndTabs': {
    _name: 'no-mixed-spaces-and-tabs',
    true: 2,
    smart: [2, 'smart-tabs']
  },

  'disallowMultipleLineBreaks': 'no-multiple-empty-lines',

  'disallowMultipleLineStrings': 'no-multi-str',

  'disallowMultipleSpaces': 'no-multi-spaces',

  'disallowMultipleVarDecl': {
    _name: 'one-var',
    _truthy: function (value) {
      if (value === true || value.strict) {
        return [2, 'never'];
      }

      return [2, { uninitialized: 'always', initialized: 'never' }];
    }
  },

  'disallowKeywordsOnNewLine': 'brace-style',

  'disallowOperatorBeforeLineBreak': {
    _name: 'operator-linebreak',
    _truthy: [2, 'none']
  },

  'disallowPaddingNewlinesInBlocks': {
    _name: 'padded-blocks',
    _truthy: [2, 'never']
  },

  'disallowParenthesesAroundArrowParam': 'arrow-parens',

  'disallowQuotedKeysInObjects': {
    _name: 'quote-props',
    _truthy: function (value) {
      var reserved = (value === 'allButReserved' ? {'keywords': true} : null);

      return [2, 'as-needed', reserved];
    }
  },

  'disallowSpaceAfterKeywords': function (value) {
    if (value === true) {
      return {
        'space-after-keywords': [2, 'never'],
        'space-return-throw-case': 0
      };
    }

    var rules = {};

    var rtc = value.indexOf('return') + value.indexOf('throw')
    + value.indexOf('case');

    if (rtc !== -3) {
      rules['space-return-throw-case'] = 0;
    }

    if (-rtc < value.length) {
      rules['space-after-keywords'] = [2, 'never'];
    }

    return rules;
  },

  'disallowSpaceAfterObjectKeys': {
    _name: 'key-spacing',
    _truthy: function (value) {
      if (value['allExcept'] && value['allExcept'][0] === 'aligned') {
        return [2, { 'align': 'colon' }];
      }

      return [2, { 'beforeColon': false, 'afterColon': true }];
    }
  },

  'disallowSpaceBeforeBlockStatements': {
    _name: 'space-before-blocks',
    _truthy: [2, 'never']
  },

  'disallowSpaceBeforeComma': {
    _name: 'comma-spacing',
    _truthy: [2, {'before': false}]
  },

  'disallowSpaceBeforeObjectValues': {
    _name: 'key-spacing',
    _truthy: function () {
      if (!this.value) {
        return [2, {'afterColon': false}];
      }

      this.value[1]['afterColon'] = false;

      return this.value;
    }
  },

  'disallowSpaceBeforeSemicolon': {
    _name: 'semi-spacing',
    _truthy: [2, {'before': false, 'after': true}]
  },

  'disallowSpacesInFunctionDeclaration': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'never']
      };
    }

    return {};
  },

  'disallowSpacesInFunctionExpression': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'never']
      };
    }

    return {};
  },

  'disallowSpacesInFunction': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'never']
      };
    }

    return {};
  },

  'disallowSpacesInNamedFunctionExpression': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'never']
      };
    }

    return {};
  },

  'disallowSpacesInsideArrayBrackets': {
    _name: 'array-bracket-spacing',
    _truthy: function (value) {
      var rule = this.value || [2, 'always', {}];

      rule[2]['singleValue'] = true;

      if (value === 'nested') {
        rule[2]['arraysInArrays'] = true;
      }

      return rule;
    }
  },

  'disallowSpacesInsideObjectBrackets': {
    _name: 'array-bracket-spacing',
    _truthy: function (value) {
      var rule = this.value || [2, 'always', {}];

      rule[2]['singleValue'] = true;

      if (value === 'nested') {
        rule[2]['objectsInArrays'] = true;
      }

      return rule;
    }
  },

  'disallowSpacesInsideParentheses': {
    _name: 'space-in-parens',
    _truthy: function (value) {
      if (value === true) {
        return [2, 'never'];
      }

      var exceptions = [];

      ['{}', '()', '[]'].forEach(function (str) {
        if (value.indexOf(str[0]) > -1 || value.indexOf(str[1]) > -1) {
          exceptions.push(str);
        }
      });

      return [2, 'never', { 'exceptions': exceptions }];
    }
  },

  'disallowTrailingComma': {
    _name: 'comma-dangle',
    _truthy: [2, 'never']
  },

  'disallowTrailingWhitespace': {
    _name: 'no-trailing-spaces',
    _truthy: function (value) {
      return (value === true) ? 2 : [2, { 'skipBlankLines': true }];
    }
  },

  'disallowYodaConditions': {
    _name: 'yoda',
    _truthy: [2, 'never']
  },

  'jsDoc': 'valid-jsdoc',

  'maximumLineLength': {
    _name: 'max-length',
    _truthy: function (value) {
      return value.value ? value.value : value;
    }
  },

  'requireAlignedObjectValues': {
    _name: 'key-spacing',
    _truthy: [2, { 'align': 'colon' }]
  },

  'requireCamelCaseOrUpperCaseIdentifiers': {
    _name: 'camelcase',
    _truthy: function (value) {
      var checkProperties = (value === true) ? 'never' : 'always';

      return [2, { 'properties': checkProperties }];
    }
  },

  'requireCapitalizedConstructors': {
    _name: 'new-cap',
    _truthy: function (value) {
      if (value === true) {
        return 2;
      }

      return [2, {
        'newIsCapExceptions': value['allExcept'],
        'capIsNewExceptions': value['allExcept']
      }];
    }
  },

  'requireCommaBeforeLineBreak': {
    _name: 'comma-style',
    _truthy: [2, 'last']
  },

  'requireCurlyBraces': {
    _name: 'curly',
    _truthy: [2, 'all']
  },

  'requireDotNotation': {
    _name: 'dot-notation',
    _truthy: function (value) {
      var rules = {};

      if (value === true) {
        return 2;
      }

      if (value === 'except_snake_case') {
        return [2, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }];
      }

      if (value['allExcept'].indexOf('keywords') > -1) {
        rules['allowKeywords'] = true;
      }

      if (value['allExcept'].indexOf('snake_case') > -1) {
        rules['allowPattern'] = '^[a-z]+(_[a-z]+)+$';
      }

      return [2, rules];
    }
  },

  'requireKeywordsOnNewLine': {
    _name: 'brace-style',
    _truthy: [2, 'stroustrup', { 'allowSingleLine': true }]
  },

  'requireLineBreakAfterVariableAssignment': {
    _name: 'newline-after-var',
    _truthy: [2, 'always']
  },

  'requireLineFeedAtFileEnd': 'eol-last',

  'requireMultipleVarDecl': {
    _name: 'one-var',
    _truthy: [2, 'never']
  },

  'requireNamedUnassignedFunctions': 'func-names',

  'requireOperatorBeforeLineBreak': {
    _name: 'operator-linebreak',
    _truthy: [2, 'before']
  },

  'requirePaddingNewLineAfterVariableDeclaration': {
    _name: 'newline-after-var',
    _truthy: [2, 'always']
  },

  'requirePaddingNewLinesBeforeLineComments': {
    _name: 'lines-around-comment',
    _truthy: [2, { 'beforeBlockComment': true, 'beforeLineComment': true }]
  },

  'requirePaddingNewlinesInBlocks': {
    _name: 'padded-blocks',
    _truthy: [2, 'always']
  },

  'requireParenthesesAroundArrowParam': 'arrow-parens',

  'requireParenthesesAroundIIFE': 'wrap-iife',

  'requireQuotedKeysInObjects': {
    _name: 'quote-props',
    _truthy: [2, 'always']
  },

  'requireSemicolons': {
    _name: 'semi',
    _truthy: [2, 'always']
  },

  'requireSpaceAfterBinaryOperators': {
    _name: 'space-infix-ops',
    _truthy: 2
  },

  'requireSpaceAfterKeywords': function (value) {
    if (value === true) {
      return {
        'space-after-keywords': [2, 'always'],
        'space-return-throw-case': 0
      };
    }

    var rules = {};

    var rtc = value.indexOf('return') + value.indexOf('throw')
    + value.indexOf('case');

    if (rtc !== -3) {
      rules['space-return-throw-case'] = 0;
    }

    if (-rtc < value.length) {
      rules['space-after-keywords'] = [2, 'always'];
    }

    return rules;
  },

  'requireSpaceAfterLineComment': {
    _name: 'lines-around-comment',
    _truthy: function () {
      if (this.value) {
        this.value[1]['afterBlockComment'] = true;
        this.value[1]['afterLineComment'] = true;

        return this.value;
      }

      return [2, { 'afterBlockComment': true, 'afterLineComment': true }];
    }
  },

  'requireSpaceAfterObjectKeys': {
    _name: 'key-spacing',
    _truthy: function () {
      if (this.value) {
        this.value[1]['beforeColon'] = true;

        return this.value;
      }

      return [2, { 'afterColon': true }];
    }
  },

  'disallowSpaceAfterPrefixUnaryOperators': 'space-unary-ops',

  'requireSpaceAfterPrefixUnaryOperators': 'space-unary-ops',

  'requireSpaceBeforeBlockStatements': {
    _name: 'space-before-blocks',
    _truthy: [2, 'always']
  },

  'requireSpaceBeforeComma': {
    _name: 'comma-spacing',
    _truthy: function () {
      if (this.value) {
        this.value[1]['before'] = true;

        return this.value;
      }

      return [2, {'before': true}];
    }
  },

  'requireSpaceBeforeObjectValues': {
    _name: 'key-spacing',
    _truthy: function () {
      if (this.value) {
        this.value[1]['afterColon'] = true;

        return this.value;
      }

      return [2, { 'afterColon': true }];
    }
  },

  'requireSpacesInFunctionDeclaration': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'always']
      };
    }

    return {};
  },

  'requireSpacesInFunctionExpression': function (value) {
    if (value['beforeOpeningRoundBrace']) {
      return {
        'space-before-function-paren': [2, 'never']
      };
    }

    return {};
  },

  'disallowSpacesInCallExpression': 'no-spaced-func',

  'requireSpacesInsideArrayBrackets': {
    _name: 'array-bracket-spacing',
    _truthy: function (value) {
      if (value === true) {
        return [2, 'always'];
      }

      var rules = {};

      if (value.allExcept.indexOf('{') > -1) {
        rules['objectsInArrays'] = false;
      }

      if (value.allExcept.indexOf('[') > -1) {
        rules['arraysInArrays'] = false;
      }

      return [2, 'always', rules];
    }
  },

  'requireSpacesInsideObjectBrackets': {
    _name: 'array-bracket-spacing',
    _truthy: function (value) {
      if (value === true) {
        return [2, 'always'];
      }

      value = value.allExcept;
      var rules = {};

      if (value.indexOf('{') > -1 || value.indexOf('}') > -1) {
        rules['objectsInArrays'] = false;
      }

      if (value.indexOf('[') > -1 || value.indexOf(']') > -1) {
        rules['arraysInArrays'] = false;
      }

      return [2, 'always', rules];
    }
  },

  'requireSpacesInsideParentheses': {
    _name: 'space-in-parens',
    _truthy: function (value) {
      if (value === 'all') {
        return [2, 'always'];
      }

      var exceptions = [];

      ['{}', '()', '[]'].forEach(function (str) {
        if (value.indexOf(str[0]) > -1 || value.indexOf(str[1]) > -1) {
          exceptions.push(str);
        }
      });

      return [2, 'always', { 'exceptions': exceptions }];
    }
  },

  'requireSpread': 'prefer-spread',

  'requireTemplateStrings': {
    _name: 'quotes',
    _truthy: [2, 'backtick']
  },

  'requireTrailingComma': {
    _name: 'comma-dangle',
    _truthy: function (value) {
      return [2, (value === true ? 'always' : 'always-multiline')];
    }
  },

  'requireVarDeclFirst': 'var-on-top',

  'requireYodaConditions': {
    _name: 'yoda',
    _truthy: [2, 'always']
  },

  'safeContextKeyword': {
    _name: 'consistent-this.value',
    _truthy: function (value) {
      return [2, value[0]];
    }
  },

  'validateIndentation': {
    _name: 'indent',
    _truthy: function (value) {
      if (typeof value === 'number') {
        return [2, value];
      }

      return [2, 'tab'];
    }
  },

  'validateLineBreaks': {
    _name: 'linebreak-style',
    _truthy: function (value) {
      var sys = (value === 'CLRF') ? 'windows' : 'unix';

      return [2, sys];
    }
  },

  'validateQuoteMarks': {
    _name: 'quotes',
    _truthy: function (value) {
      if (value === '"') {
        return [2, 'double'];
      }

      if (value === '\'') {
        return [2, 'single'];
      }

      var mark = value.mark === '"' ? 'double' : 'single';
      var escape = value.escape;

      return [2, mark, escape ? 'avoid-escape' : undefined];
    }
  }
};
