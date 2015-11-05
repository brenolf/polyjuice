#!/usr/bin/env node

var pkg = require('../package')

var yargs = require('yargs')
  .version(function () {
    return pkg.version
  })
  .usage('Usage: $0 <command> <filename>')
  .option('jscs', {
    describe: 'the jscs config file',
    type: 'string'
  })
  .option('jshint', {
    describe: 'the jshint config file',
    type: 'string'
  })
  .option('eslint', {
    describe: 'the eslint config file',
    type: 'string'
  })
  .option('to-jscs', {
    describe: 'whether the output should be jscs',
    type: 'boolean'
  })
  .option('to-jshint', {
    describe: 'whether the output should be jshint',
    type: 'boolean'
  })
  .option('discarded', {
    alias: 'd',
    describe: 'show discarded rules when transpiling'
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .epilog(pkg.author)

var argv = yargs.argv

var polyjuice = require('./polyjuice')

var output = {}

var discarded = []

if (argv.jshint && argv.jscs) {
  output = polyjuice.to.eslint(argv.jshint, argv.jscs, discarded)
} else if (argv.jshint) {
  output = polyjuice.from.jshint(argv.jshint, discarded)
} else if (argv.jscs) {
  output = polyjuice.from.jscs(argv.jscs, discarded)
} else if (argv.eslint) {
  var method = argv['to-jscs'] ? 'jscs' : 'jshint'

  output = polyjuice.to[method](argv.eslint, discarded)
} else {
  output = null
  yargs.showHelp()
}

if (argv.discarded && output !== null) {
  discarded.forEach(function (rule) {
    console.log(rule)
  })

  if (discarded.length === 0) {
    console.log('No rule has been discarded')
  }
} else if (output !== null) {
  console.log(JSON.stringify(output, null, 2))
}
