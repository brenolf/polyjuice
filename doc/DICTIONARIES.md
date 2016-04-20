# Dictionaries
Polyjuice uses JavaScript objects to find a proper translation for a given rule. The object has the rule name to be translated as key and variable options as its value.

Basically, there is a truth function that will be used to test the value of the rule to be translated, and then its output is going to be matched against a truth table of default values of the destination tool.

The truth function is currently default for all languages, and its implementation is as follows.

```js
var fn = function(input) {
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
module.exports = function(__current__, value) {
  return {
    'rule-in-eslint': [2, value]
  }
}
```

This format tells the interpreter that you will return an object containing all the key/value that should be used. It is useful when you either want to omit a rule or when you want to consider several rules. You must return an object, even if empty.

### String

```js
module.exports = 'rule-in-eslint'
```

This format tells the interpreter that those rules are equivalent. Therefore, using the truth function on the value it gets the corresponding default true/false value from the truth table (or copy it if a number). I.e. if `rule-in-jshint': true` is in the source file, `'rule-in-eslint': 2` will be generated.

### Array

```js
module.exports = ['rule-in-eslint-1', 'rule-in-eslint-2']
```

This will work just as above, applying it to every string in the array.

### Object

```js
module.exports = {
  name: 'rule-in-eslint',
  truthy: function(__current__, value) {
    if (__current__) {
      return [2, __current__, value]
    }

    return [2, value]
  },
  falsy: [2, 'never']
}
```

#### Attributes

##### `name`

The attribute `name` is **mandatory**. It is the name in the target language.

##### `eval`

The attribute `eval`, if given, should be always a function and works much like using a function directly; However you do not need to provide the target as an object.

##### `truthy`

The attribute `truthy`, if function, is a shorthand for `eval`. It is called after the truth function  decides the value is considered `true`. It can also be a string, an array, or any other value that can be directly applied.

##### `falsy`

The attribute `falsy`, if function, is a shorthand for `eval`. It is called after the truth function  decides the value is considered `false`. It can also be a string, an array, or any other value that can be directly applied.

##### `target`

When converting from ESLint, the object **must** contain the `target` library it is converting to. ESLint conversions return an object whose keys are the targets read when transpiling a file. For instance:

```js
'rule-in-eslint': {
  target: 'jshint',
  name: 'rule-in-jshint',
  truthy: true
}
```

#### FCFS Policy

Polyjuice has a FCFS policy for transpiling. Therefore, all transpiling functions have two arguments: `__current__` and `value`. The first is the current value for the rule being assessed; It is useful when there is overlapping rules. The latter is the actual value of the rule being assessed in the moment. Bear in mind that the function priority is `eval > test > truthy/falsy`.
