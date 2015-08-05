module.exports = {
  'rule1': function (value) {
    if (value === 'value1') {
      return {'new-rule1': 'value-x'}
    }

    if (value === 'value2') {
      return {
        'new-rule1.1': 'value-x',
        'new-rule1.2': 'value-y'
      }
    }
  },

  'rule2': ['new-rule2.1', 'new-rule2.2', 'new-rule2.3'],

  'rule3': 'new-rule3',

  'rule4': {
    _name: 'new-rule4',
    _truthy: function (value) {
      return 'value4-is-' + value.substr(2);
    },
    _falsy: function (value) {
      return 'value4-isnt-' + value;
    }
  },

  'rule5': {
    _name: 'new-rule5',
    _truthy: function (value) {
      return 'value5-is-' + value;
    },
    _falsy: function (value) {
      return 'value5-isnt-' + value;
    }
  },

  'rule6': {
    _name: 'new-rule6',
    _test: function (value) {
      return value;
    }
  },

  'rule7': {
    _name: 'new-rule7',
    _truthy: 'value-for-truthy-7'
  },

  'rule8': {
    _name: 'new-rule8',
    _falsy: 'value-for-falsy-8'
  },

  'rule9': {
    _name: 'new-rule9',
    _falsy: 'value-for-falsy-9'
  },

  'rule10': {
    _name: 'new-rule10'
  },

  'rule11': {
    _name: 'new-rule11',
    _truthy: 4242
  },

  'substitute-rule': {
    _name: 'new-rule10',
    _truthy: 'replace-old-value'
  },

  'extensible-rule': {
    _name: 'new-rule10',
    _falsy: function () {
      if (this.value) {
        return ['extending', this.value];
      }

      return 'didnt extend';
    }
  }
}
