/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

module.exports = function (dictionary, truth_fn, truth_tbl, current) {
  this.dictionary = dictionary;
  this.truth_fn = truth_fn;
  this.truth_tbl = truth_tbl;
  this.current = current || {};

  var that = this;

  this.get = function (key, value) {
    var read = that.dictionary[key];

    if (!read) {
      return {};
    }

    if (typeof read === 'function') {
      return read(value);
    }

    if (typeof read === 'string') {
      read = [read];
    }

    var tmp = {};
    var isTruthy = that.truth_fn(value);

    if (Array.isArray(read)) {
      read.forEach(function (rule) {
        var tbl = that.truth_tbl[isTruthy];

        tmp[rule] = (typeof value === 'number') ? value : tbl;
      });

      return tmp;
    }

    if (!read._name) {
      throw new Error('Missing rule name');
    }

    if (read._test && typeof read._test !== 'function') {
      throw new Error('_test must be a function');
    }

    var directive = isTruthy ? read._truthy : read._falsy;

    directive = read._test || directive;

    if (directive !== undefined && directive !== null) {
      if (typeof directive === 'function') {
        var context = {value: that.current[read._name]};

        tmp[read._name] = directive.call(context, value);
      } else {
        tmp[read._name] = directive;
      }
    } else {
      tmp[read._name] = that.truth_tbl[isTruthy];
    }

    return tmp;
  };

  return this;
};
