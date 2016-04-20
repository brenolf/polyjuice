module.exports = {
  'rule1': function(current, value) {
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
    name: 'new-rule4',
    truthy: function(current, value) {
      return 'value4-is-' + value.substr(2)
    },

    falsy: function(current, value) {
      return 'value4-isnt-' + value
    }
  },

  'rule5': {
    name: 'new-rule5',
    truthy: function(current, value) {
      return 'value5-is-' + value
    },

    falsy: function(current, value) {
      return 'value5-isnt-' + value
    }
  },

  'rule6': {
    name: 'new-rule6',
    eval: function(current, value) {
      return value
    }
  },

  'rule7': {
    name: 'new-rule7',
    truthy: 'value-for-truthy-7'
  },

  'rule8': {
    name: 'new-rule8',
    falsy: 'value-for-falsy-8'
  },

  'rule9': {
    name: 'new-rule9',
    falsy: 'value-for-falsy-9'
  },

  'rule10': {
    name: 'new-rule10'
  },

  'rule11': {
    name: 'new-rule11',
    truthy: 4242
  },

  'substitute-rule': {
    name: 'new-rule10',
    truthy: 'replace-old-value'
  },

  'extensible-rule': {
    name: 'new-rule10',
    falsy: function(current) {
      if (current) {
        return ['extending', current]
      }

      return 'didnt extend'
    }
  }
}
