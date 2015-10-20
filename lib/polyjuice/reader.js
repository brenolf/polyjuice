/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

module.exports = function (dictionary, truth_fn, truth_tbl, current) {
  this.dictionary = dictionary
  this.truth_fn = truth_fn
  this.truth_tbl = truth_tbl
  this.current = current || {}

  var that = this

  this.get = function (key, value) {
    var read = that.dictionary[key]

    if (!read) {
      return {}
    }

    if (typeof read === 'function') {
      return read(value)
    }

    if (typeof read === 'string') {
      read = [read]
    }

    var tmp = {}
    var isTruthy = that.truth_fn(value)

    if (Array.isArray(read)) {
      read.forEach(function (rule) {
        var tbl = that.truth_tbl[isTruthy]

        tmp[rule] = (typeof value === 'number') ? value : tbl
      })

      return tmp
    }

    if (!read.name) {
      throw new Error('Missing rule name')
    }

    if (read.test && typeof read.test !== 'function') {
      throw new Error('test must be a function')
    }

    var directive = isTruthy ? read.truthy : read.falsy

    directive = read.test || directive

    if (directive !== undefined && directive !== null) {
      if (typeof directive === 'function') {
        var context = {value: that.current[read.name]}

        tmp[read.name] = directive.call(context, value)
      } else {
        tmp[read.name] = directive
      }
    } else {
      tmp[read.name] = that.truth_tbl[isTruthy]
    }

    return tmp
  }

  return this
}
