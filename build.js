#!/usr/bin/env node

// see lib/main.js for info

const ghAuth   = require('./lib/ghauth')
    , main     = require('./lib/main')
    , stats    = require('./lib/stats')

const config   = require('./config')

config.verbose = process.argv.indexOf('-v') > -1
config.quiet   = process.argv.indexOf('-q') > -1

if (process.argv.indexOf('-s') > -1)
  return stats(config)

ghAuth(config, function (err) {
  if (err)
    throw err
  main(config)
})