# Dictionaries
Polyjuice uses JavaScript objects to find a proper translation for a given rule. The object has the rule name to be translated as key and variable options as its value.

Basically, there is a truth function that will be used to test the value of the rule to be translated, and then its output is going to be matched against a truth table of default values of the destination tool.

The truth function is currently default for all languages, and its implementation is as follows.

```js
var fn = function (input) {
  if (typeof input === 'number') {
    return true
  }

  return input ? true : false
}
```

It tells that if the value of the rule is a number, then it is considered true otherwise it is true based on JavaScript existence test. An example of a truth table is shown below.

```json
{
  "true": 2,
  "false": 0
}
```

## Possible rule values

### Function

```js
'rule-in-jshint': function (value) {
  return { 'rule-in-eslint': [2, value] }
}
```

This format tells the interpreter that you will return an object containing all the key/value that should be used. It is useful when you either want to omit a rule or when you want to consider several rules. You must return an object, even if empty.

### String

```js
'rule-in-jshint': 'rule-in-eslint'
```

This format tells the interpreter that those rules are equivalent. Therefore, using the truth function on the value it gets the corresponding default true/false value from the truth table (or copy it if a number). I.e. if `'rule-in-jshint': true` is in the source file, `'rule-in-eslint': 2` will be generated.

### Array

```js
'rule-in-jshint': ['rule-in-eslint-1', 'rule-in-eslint-2']
```

This will work just as above, applying it to every string in the array.

### Object

```js
'rule-in-jshint': {
  name: 'rule-in-eslint',
  truthy: function (value) {
    if (this.value) {
      return [2, this.value, value]
    }

    return [2, value]
  },
  falsy: [2, 'never']
}
```

For objects there are 4 possible keys to be used: `name`, `truthy`, `falsy` and `test`. The attribute `name` is **mandatory** it is the name in the target language. The attribute `test`, if given, should be always a function and works much like using a function directly, but having their context set to an object with a single key `value`, whose value is the current value of the  attribute being set (the one represented by `name`).

Since Polyjuice has a FCFS policy for transpiling, the context provided for `test` plays an important rule on it. For instance, there could be a scenario where multiple options can be applied to the same rule and they are non-overlapping. Thus, you could find the context's values useful in order to preserve the previously applied rules.

The attributes `truthy` and `falsy`, if functions, are shorthands for `test` because they will only be called after applying the truth function and deciding whether or not the value is to be considered true/false. However, `truthy` and `falsy` can also have the content to be applied directly (no need to be functions as `test`).

Note that `test` is always prioritized over `truthy` and `falsy`. Also mind the interpreter's FCFS policy when implementing a translation.

#### ESLint attributes

When converting from ESLint, the object has to contain the `target` library it's converting to. ESLint conversions returns an object whose keys are the targets read when transpiling a file. For instance:

```js
'rule-in-eslint': {
  target: 'jshint',
  name: 'rule-in-jshint',
  truthy: true
}
```
