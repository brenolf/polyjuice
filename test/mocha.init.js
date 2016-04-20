'use strict'

var chai = require('chai')

global.expect = chai.expect

global.caller = function(lib) {
  return function(__current__) {
    var fn =  typeof lib === 'function'
              ? lib
              : (lib.truthy || lib.test || lib.eval)

    return fn.bind(fn, __current__)
  }
}
