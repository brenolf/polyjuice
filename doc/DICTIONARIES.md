# Dictionaries
Polyjuice uses JavaScript objects to find a proper translation for a given rule. The object has the rule name to be translated as key and variable options as its value.

Basically, there is a truth function that will test the value provided in the file to be translated and that will then later be matched against a truth table of default values of the language to be translated. The truth function is currently default for all languages, and it as follows.

```js
var fn = function (input) {
  if (typeof input === 'number') {
    return true;
  }

  return input ? true : false;
};
```

Whereas an example of truth table is

```json
{
  "true": 2,
  "false": 0
}
```

The interpreter will run through the dictionary matching the source code with a given set of possibilities that will be used when translating.

## Possible rule values
These are the possible rules a dictionary can have.

### Function
For rules with the format:
```js
'rule-in-jshin': function (value) {
  return { 'rule-in-eslint': [2, value] };
}
```
Using this format you tell the interpreter that you will return an object containing all the key/value that should be used. It is useful when you either want to omit a rule or when you want to consider several rules. You must return an object, even if empty.

### String
For rules with the format:
```js
'rule-in-jshint': 'rule-in-eslint'
```
Using this format you tell the interpreter that those rules are equivalent. Therefore, using the truth function on the value, it get the corresponding default true/false value from the truth table (or copy it if a number). I.e. if `'rule-in-jshin': true` is in the source file, `'rule-in-eslint': 2` will be generated.

### Array
For rules with the format:
```js
'rule-in-jshint': ['rule-in-eslint-1', 'rule-in-eslint-2']
```
This will work just as above, applying it to every string in the array.

### Object
For rules with the format:
```js
'rule-in-jshint': {
  _name: 'rule-in-eslint',
  _truthy: function (value) {
    if (this.value) {
      return [2, this.value, value];
    }

    return [2, value];
  },
  _falsy: [2, 'never']
}
```
For objects there are 4 possible keys to be used: `_name`, `_truthy`, `_falsy` and `_test`. The attribute `_name` is mandatory, and is the name in the target language. The attribute `_test`, if given, should be always a function and works much like using a function directly; However, they have their context set to an object with a single key `value`, whose value is the current value of the  attribute being set (the one represented by `_name`).

The attributes `_truthy` and `_falsy`, if functions, are shorthands for `_test`, since they will only be called after applying the truth function and deciding whether or not the value is to be considered true/false. However, `_truthy` and `_falsy` can also have the content to be applied directly (no need to be functions as `_test`).

Note that `_test` is always prioritized over `_truthy` and `_falsy`. Also, the interpreter has a FCFS policy. Therefore, if you want to ensure you did not overrode a rule, use the context's value (`this.value`) when assessing a value.
