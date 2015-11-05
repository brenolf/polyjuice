var eslint = require('../../lib/dictionaries/eslint')

var getFn = caller(eslint)

describe('eslint', function () {
  it('converts comma-dangle correctly', function () {
    var fn = getFn('comma-dangle')

    expect(fn(2)).to.eql(
      { disallowTrailingComma: true }
    )

    expect(fn([2, 'never'])).to.eql(
      { disallowTrailingComma: true }
    )

    expect(fn([2, 'always'])).to.eql(
      { requireTrailingComma: true }
    )
  })

  it('converts no-console correctly', function () {
    var fn = getFn('no-console')
    var fnContext = getFn('no-console', ['x'])

    expect(fn()).to.eql(['-console'])
    expect(fnContext()).to.eql(['x', '-console'])
  })

  it('converts complexity correctly', function () {
    var fn = getFn('complexity')

    expect(fn([2, 10])).to.eql(10)
  })

  it('converts curly correctly', function () {
    var fn = getFn('curly')

    expect(fn([2, 'multi-line'])).to.eql({ disallowCurlyBraces: true })
    expect(fn([2, 'all'])).to.eql({ requireCurlyBraces: true })
  })

  it('converts dot-notation correctly', function () {
    var fn = getFn('dot-notation')

    expect(fn(2)).to.eql(true)
    expect(fn([2, { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }])).to.eql({
      allExcept: ['snake_case']
    })
    expect(fn([2, {
      'allowKeywords': true,
      'allowPattern': '^[a-z]+(_[a-z]+)+$'
    }])).to.eql({
      allExcept: ['snake_case', 'keywords']
    })
  })

  it('converts no-implicit-coercion correctly', function () {
    var fn = getFn('no-implicit-coercion')

    expect(fn([2, {'boolean': true, 'number': true, 'string': true}])).to.eql(
      ['boolean', 'numeric', 'string']
    )
  })

  it('converts no-warning-comments correctly', function () {
    var fn = getFn('no-warning-comments')

    expect(fn(
      [2, { "terms": ["todo", "fixme", "any"], "location": "anywhere" }]
    )).to.eql(["todo", "fixme", "any"])

    expect(fn(
      [1, { "location": "anywhere" }]
    )).to.eql([])
  })

  it('converts no-with correctly', function () {
    var fn = getFn('no-with')
    var fnContext = getFn('no-with', ['x'])

    expect(fn()).to.eql(['with'])
    expect(fnContext()).to.eql(['x', 'with'])
  })

  it('converts yoda correctly', function () {
    var fn = getFn('yoda')

    expect(fn([2, 'always'])).to.eql({
      requireYodaConditions: true
    })

    expect(fn([2, 'never'])).to.eql({
      disallowYodaConditions: true
    })
  })

  it('converts strict correctly', function () {
    var fn = getFn('strict')

    expect(fn([2, 'function'])).to.eql({
      strict: true
    })

    expect(fn(0)).to.eql({
      globalstrict: true
    })
  })

  it('converts no-shadow correctly', function () {
    var fn = getFn('no-shadow')

    expect(fn(2)).to.eql({ shadow: false })
    expect(fn(0)).to.eql({ shadow: true })
    expect(fn([2, {}])).to.eql({ shadow: 'outer' })
  })

  it('converts array-bracket-spacing correctly', function () {
    var fn = getFn('array-bracket-spacing')

    expect(fn([2, "never"])).to.eql({
      disallowSpacesInsideArrayBrackets: true,
      disallowSpacesInsideObjectBrackets: true
    })

    expect(fn([2, "always"])).to.eql({
      requireSpacesInsideArrayBrackets: true,
      requireSpacesInsideObjectBrackets: true
    })

    var result = fn([2, "never", {
      "singleValue": true,
      "objectsInArrays": true,
      "arraysInArrays": true
    }])

    expect(result.disallowSpacesInsideArrayBrackets.allExcept).to.eql(
      ['{', '}', '[', ']']
    )

    expect(result.disallowSpacesInsideObjectBrackets.allExcept).to.eql(
      ['{', '}', '[', ']']
    )
  })

  it('converts brace-style correctly', function () {
    var fn = getFn('brace-style')

    expect(fn([2, 'stroustrup', { 'allowSingleLine': true }])).to.eql({
      requireKeywordsOnNewLine: true
    })

    expect(fn(2)).to.eql({
      disallowKeywordsOnNewLine: true
    })
  })

  it('converts camelcase correctly', function () {
    var fn = getFn('camelcase')

    expect(fn([2, {properties: "always"}])).to.eql(false)
    expect(fn([2, {properties: "never"}])).to.eql(true)
  })

  it('converts comma-spacing correctly', function () {
    var fn = getFn('comma-spacing')

    expect(fn([2, {'before': false}])).to.eql({
      requireSpaceBeforeComma: true
    })

    expect(fn([2, {'before': true}])).to.eql({
      disallowSpaceBeforeComma: true
    })
  })

  it('converts comma-style correctly', function () {
    var fn = getFn('comma-style')

    expect(fn([1, 'first'])).to.eql({
      disallowCommaBeforeLineBreak: true
    })

    expect(fn([1, 'all'])).to.eql({
      requireCommaBeforeLineBreak: true
    })
  })

  it('converts consistent-this correctly', function () {
    var fn = getFn('consistent-this')

    expect(fn([2, 'x'])).to.eql('x')
    expect(fn([2, ['x', 'y']])).to.eql(['x', 'y'])
  })

  it('converts func-names correctly', function () {
    var fn = getFn('func-names')

    expect(fn()).to.eql({
      requireNamedUnassignedFunctions: true,
      disallowAnonymousFunctions: true
    })
  })

  it('converts id-match correctly', function () {
    var fn = getFn('id-match')

    expect(fn([2, '^(a|b|c)$', {}])).to.eql(['a', 'b', 'c'])
    expect(fn([2, '^[a-z]+([A-Z][a-z]+)*$', {}])).to.eql(['a-z]+([A-Z][a-z]+)'])
  })

  it('converts indent correctly', function () {
    var fn = getFn('indent')

    expect(fn(2)).to.eql(4)
    expect(fn([2, 'tab'])).to.eql('\t')
    expect(fn([2, 2])).to.eql(2)
  })

  it('converts key-spacing correctly', function () {
    var fn = getFn('key-spacing')

    expect(fn([2, { "align": "colon" }])).to.eql({
      requireAlignedObjectValues: true,
      disallowSpaceAfterObjectKeys: {
        allExcept: ['aligned']
      }
    })

    expect(fn(
      [2, { "align": "colon", "beforeColon": true, "afterColon": false }]
    )).to.eql({
      requireAlignedObjectValues: true,
      disallowSpaceAfterObjectKeys: {
        allExcept: ['aligned']
      }
    })

    expect(fn([2, {"beforeColon": true, "afterColon": true}])).to.eql({
      requireSpaceAfterObjectKeys: true,
      requireSpaceBeforeObjectValues: true
    })

    expect(fn([2, {"beforeColon": false, "afterColon": false}])).to.eql({
      disallowSpaceBeforeObjectValues: true,
      disallowSpaceAfterObjectKeys: true
    })

    expect(fn([2, {"beforeColon": true, "afterColon": false}])).to.eql({
      requireSpaceAfterObjectKeys: true,
      disallowSpaceBeforeObjectValues: true
    })
  })

  it('converts linebreak-style correctly', function () {
    var fn = getFn('linebreak-style')

    expect(fn([2, 'windows'])).to.eql('CLRF')
    expect(fn([2, 'unix'])).to.eql('LF')
  })

  it('converts lines-around-comment correctly', function () {
    var fn = getFn('lines-around-comment')

    var result = {
      requirePaddingNewLinesBeforeLineComments: true,
      requireSpaceAfterLineComment: true
    }

    expect(fn(2)).to.eql(result)
    expect(fn([2, 'x'])).to.eql(result)
    expect(fn([0])).to.eql({})
  })

  it('converts new-cap correctly', function () {
    var fn = getFn('new-cap')

    expect(fn(2)).to.eql(true)

    expect(fn([2, {"capIsNewExceptions": ["Person"]}])).to.eql({
      allExcept: ['Person']
    })

    expect(fn([2, {"capIsNewExceptions": ["foo.Person"]}])).to.eql({
      allExcept: ['foo.Person']
    })
  })

  it('converts newline-after-var correctly', function () {
    var fn = getFn('newline-after-var')

    expect(fn(0)).to.eql({})

    expect(fn([1, 'always'])).to.eql({
      requireLineBreakAfterVariableAssignment: true,
      requirePaddingNewLineAfterVariableDeclaration: true
    })

    expect(fn(2)).to.eql({
      requireLineBreakAfterVariableAssignment: true,
      requirePaddingNewLineAfterVariableDeclaration: true
    })
  })

  it('converts no-trailing-spaces correctly', function () {
    var fn = getFn('no-trailing-spaces')

    expect(fn([2])).to.eql(true)

    expect(fn([2, { "skipBlankLines": true }])).to.eql('ignoreEmptyLines')
  })

  it('converts one-var correctly', function () {
    var fn = getFn('one-var')

    expect(fn([2, 'never'])).to.eql({
      disallowMultipleVarDecl: true,
      requireMultipleVarDecl: true
    })

    expect(fn([1, 'never'])).to.eql({
      disallowMultipleVarDecl: true,
      requireMultipleVarDecl: true
    })

    expect(fn([2])).to.eql({ disallowMultipleVarDecl: true })

    expect(fn(2)).to.eql({ disallowMultipleVarDecl: true })

    expect(fn(0)).to.eql({})
  })

  it('converts operator-linebreak correctly', function () {
    var fn = getFn('operator-linebreak')

    expect(fn([2, 'before'])).to.eql(
      { disallowOperatorBeforeLineBreak: true }
    )

    expect(fn([2, 'after'])).to.eql(
      { requireOperatorBeforeLineBreak: true }
    )

    expect(fn(0)).to.eql({})
  })

  it.skip('converts padded-blocks correctly', function () {
    var fn = getFn('padded-blocks')

    expect(fn()).to.eql()
  })

  it.skip('converts quote-props correctly', function () {
    var fn = getFn('quote-props')

    expect(fn()).to.eql()
  })

  it.skip('converts quotes correctly', function () {
    var fn = getFn('quotes')

    expect(fn()).to.eql()
  })

  it.skip('converts semi correctly', function () {
    var fn = getFn('semi')

    expect(fn()).to.eql()
  })

  it.skip('converts space-after-keywords correctly', function () {
    var fn = getFn('space-after-keywords')

    expect(fn()).to.eql()
  })

  it.skip('converts space-before-blocks correctly', function () {
    var fn = getFn('space-before-blocks')

    expect(fn()).to.eql()
  })

  it.skip('converts space-before-function-paren correctly', function () {
    var fn = getFn('space-before-function-paren')

    expect(fn()).to.eql()
  })

  it.skip('converts space-in-parens correctly', function () {
    var fn = getFn('space-in-parens')

    expect(fn()).to.eql()
  })

  it.skip('converts space-return-throw-case correctly', function () {
    var fn = getFn('space-return-throw-case')

    expect(fn()).to.eql()
  })

  it.skip('converts space-unary-ops correctly', function () {
    var fn = getFn('space-unary-ops')

    expect(fn()).to.eql()
  })

  it.skip('converts arrow-parens correctly', function () {
    var fn = getFn('arrow-parens')

    expect(fn()).to.eql()
  })

  it.skip('converts max-depth correctly', function () {
    var fn = getFn('max-depth')

    expect(fn()).to.eql()
  })

  it.skip('converts max-len correctly', function () {
    var fn = getFn('max-len')

    expect(fn()).to.eql()
  })

  it.skip('converts max-params correctly', function () {
    var fn = getFn('max-params')

    expect(fn()).to.eql()
  })

  it.skip('converts max-statements correctly', function () {
    var fn = getFn('max-statements')

    expect(fn()).to.eql()
  })
})
