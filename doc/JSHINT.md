# JSHint

## Discarded rules
These are the rules that are discarded when assessing a `.jshintrc` file due to the lack of those rules in ESLint.

* `enforceall`
* `maxerr`
* `es3`
* `es5`
* `freeze`
* `futurehostile`
* `singleGroups`
* `boss`
* `elision`
* `esnext`
* `lastsemic`
* `moz`

## About the conversion json structure
The json file that converts JSHint rules into their ESLint counterpart has the following format:

```json
"rule": {
  "_name": "ESLint_rule_name",
  "true": 2,
  "false": 0,
  "value": [2, "parameter"],
  "_override": "true"
}
```
Polyjuice also uses this json structure, to look for a translation for the values in the rules in order to set its value. If it is not successful, it will then use that value as a ESLint value directly (if it is either `true` or `false`, then it will use the error levels).

The parameter `_name` is the name that should be used as ESLint rule. When `_override` parameter is set, Polyjuice will use that entry as priority, replacing another rule of the same name if already set.

By default, `true` and `false` are set, respectively, to the maximum and minimum error levels. Therefore, if the rule is binary toggled, then you can omit the whole object and use the name of the rule instead, for instance `"rule": "ESLint_rule_name"`.

If more than one rule needs to be applied, just wrap the content in an array and write the content as you would normally. Also, there is a special rule `_environments` that establishes all the possible rules that can be found when parsing a `.jshintrc` file.
