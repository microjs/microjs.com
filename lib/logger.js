const colors              = require('colors')
    , errno               = require('errno')
    , strings             = require('./strings')

const ERROR               = 'error'
    , WARNING             = 'warning'
    , SUCCESS             = 'success'
      // how many characters for the progress bar, minus totals
    , PROGRESS_BAR_LENGTH = 75

function makeMsg (err) {
  var message
  if (err && err.message)
    message = err.message
  else
    message = String(err || '')
  if (err && err.errno && errno.errno[err.errno])
    message += ' (' + errno.errno[err.errno].description + ')'
  return message
}

// this isn't pretty, all in the name of making the output pretty!
// use ANSI codes to move the cursor around and clear lines so we
// can get a progress bar constantly at the bottom

function Logger (config) {
  if (!(this instanceof Logger))
    return new Logger(config)

  this.verbose = config.verbose
  this.quiet   = config.quiet
}

[ ERROR, WARNING, SUCCESS ].forEach(function (type) {
  Logger.prototype[type] = function (libName, err, libSource) {
    this.log(type, libName, err, libSource)
  }
})

Logger.prototype.log = function (type, libName, err, libSource) {
  if (this.quiet)
    return

  var message = makeMsg(err)

  if (this.last == 'progress')
    process.stdout.write('\033[1F\033[0K')
  if (type !== SUCCESS || this.verbose) {
    process.stdout.write(
        strings.rpad((type.toUpperCase() + ':'), 8)[type === ERROR ? 'red' : type === WARNING ? 'yellow' : 'green']
      + ' ' + strings.rpad(libName || 'UNKNOWN LIBRARY', 20).bold
      + ' ' + message
      + '\n'
    )
    if (libSource)
      console.log(strings.lpad('', 8), Array.isArray(libSource) ? libSource.join(', ') : libSource)
  }
  this.last = 'log'
}

Logger.prototype.progress = function (completed, total) {
  if (this.quiet)
    return

  var frac = completed ? completed / total : 0
    , perc = Math.round(frac * 100)
    , ps = '|'
             + strings.rpad(
                 strings.lpad('', Math.round(frac * PROGRESS_BAR_LENGTH), '=') + '>'
               , PROGRESS_BAR_LENGTH)
             + '| ' + perc + '%' // (' + completed + '/' + total + ')'

  if (this.last == 'progress')
    process.stdout.write('\033[1F\033[0K')
  console.log(ps.green.bold)
  this.last = 'progress'
}

module.exports         = Logger
module.exports.ERROR   = ERROR
module.exports.WARNING = WARNING
module.exports.SUCCESS = SUCCESS