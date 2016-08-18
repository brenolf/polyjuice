/*
 * Polyjuice
 * Copyright(c) 2015 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
 * MIT Licensed
 */

module.exports = function(dictionary, truth_fn, truth_tbl, current) {
  this.dictionary = dictionary
  this.truth_fn = truth_fn
  this.truth_tbl = truth_tbl
  this.current = current || {}

  var that = this

  this.target = function(key) {
    var read = that.dictionary[key]

    return read ? read.target : null
  }

  this.get = function(key, value) {
    var read = that.dictionary[key]

    if (!read || value === null || value === 'undefined') {
      return {}
    }

    if (typeof read === 'function') {
      return read(that.current[read.name], value)
    }

    if (typeof read === 'string') {
      read = [read]
    }

    var tmp = {}
    var isTruthy = that.truth_fn(value)

    if (Array.isArray(read)) {
      read.forEach(function(rule) {
        var tbl = that.truth_tbl[isTruthy]

        tmp[rule] = (typeof value === 'number') ? value : tbl
      })

      return tmp
    }

    if (!read.name && !read.eval) {
      throw new Error('Missing rule name for `' + key + '`')
    }

    if (read.eval && typeof read.eval !== 'function') {
      throw new Error('`eval` must be a function')
    }

    var directive = isTruthy ? read.truthy : read.falsy

    directive = read.eval || directive

    if (directive !== undefined && directive !== null) {
      if (typeof directive === 'function') {
        tmp[read.name] = directive(that.current[read.name], value)
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
