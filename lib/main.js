const path          = require('path')
    , colors        = require('colors')
    , map           = require('map-async')
    , after         = require('after')
    , moment        = require('moment')
    , xtend         = require('xtend')
    , processSource = require('./process-source')
    , processTweets = require('./process-tweets')
    , processGithub = require('./process-github')
    , Logger        = require('./logger')
    , strings       = require('./strings')
    , output        = require('./output')
    , atom          = require('./atom')

process.on('uncaughtException', function (err) {
  console.log(('Uncaught exception: ' + err).red,'\n')
  console.log(err.stack)
})

function processLib (config, logger, _lib, callback) {
  function warn (msg) {
    logger.warning(_lib.name, msg)
  }

  function _done (err) {
    if (err) {
      logger.error(lib.name, err)
      return callback()
    }

    var tooold = lib.ghlastpush && moment(lib.ghlastpush).isBefore(
          moment().subtract('months', config.githubLastPushCutoffMonths))

    if (tooold) {
      warn('Too old! Last pushed to GitHub @ '
          + moment(lib.ghlastpush).format('DD/MMM/YY')
          + ', ignoring'
          + ' [' + lib.ghlastpush + '] vs [' + config.ghLastPushCutoff + ']'
      )
      return callback()
    }

    atom.processLibrary(lib, function (err) {
      if (err) {
        console.error(('Error processing Atom feed data: ' + err).red)
        return process.exit(-1)
      }

      logger.success(
          lib.name
        ,    'raw: '        + strings.lpad(strings.sizeToString(sizes.raw), 8)
           + ', minified: ' + strings.lpad(strings.sizeToString(sizes.minified), 7)
           + ', gzipped: '  + strings.lpad(strings.sizeToString(sizes.gzipped), 6)
           + ', watchers: ' + strings.lpad(ghstats ? lib.ghwatchers : '-', 5)
           + ', forks: '    + strings.lpad(ghstats ? lib.ghforks : '-', 5)
           + ', tweets: '   + strings.lpad(lib.tweets, 5)
      )

      // cleanup so we don't waste space
      lib.ghlastpush = lib.source = lib.github = lib.novalidate = undefined

      callback(null, lib)
    })
  }

  var lib = xtend(_lib)
    , sizes
    , ghstats
    , done = after(3, _done)

  processSource(config, lib, function (err, _sizes) {
    if (err)
      return done(err)
    sizes = _sizes
    lib.size = strings.sizeToString(sizes.gzipped)
    done()
  }).on('warning', warn)

  processTweets(config, lib, function (err, twstats) {
    if (err)
      return done(err)
    lib.tweets = strings.prettyLong(twstats.count)
    done()
  }).on('warning', warn)

  processGithub(config, lib, function (err, _ghstats) {
    if (err)
      return done(err)

    ghstats = _ghstats
    if (ghstats) {
      lib.ghwatchers = strings.prettyLong(ghstats.watchers)
      lib.ghforks    = strings.prettyLong(ghstats.forks)
      lib.ghlastpush = ghstats.lastPush
    }

    done()
  }).on('warning', warn)
}

function finish (config, logger, data) {
/*
    if (err) {
      console.log(('Error writing to output file: ' + err).red.bold)
      return process.exit(1)
    }
    this.atom.write(function (err) {
      if (err) {
        console.log(('Error writing to Atom file: ' + err).red.bold)
        return process.exit(1)
      }

      if (!this.quiet)
        console.log('All done and ready to deploy!'.green.bold + ' (' + this.outList.length + ' of ' + this.data.length + ' libs included)')

      process.nextTick(function () {
        if (this.errorCount > this.errorCountThreshold) {
          console.log(('Encountered ' + this.errorCount + ' errors').red)
          process.exit(1)
        } else
          process.exit(0)
      }.bind(this))
    }.bind(this))
  }.bind(this))
*/

  var outData = data.filter(Boolean)

  output(config.outFile, outData, function (err) {
    if (err) {
      console.errr(('Error writing to output file: ' + err).red.bold)
      return process.exit(-1)
    }

    atom.write(function (err) {
      if (err) {
        console.log(('Error writing to Atom file: ' + err).red.bold)
        return process.exit(-1)
      }

      if (!this.quiet) {
        console.log(
            'All done and ready to deploy!'.green.bold
          + ' ('
          + outData.length
          + ' of '
          + data.length
          + ' libs included)'
        )
      }
    })
  })
}

function main (config) {
  var logger    = new Logger(config)
    , data      = require(path.join(__dirname, '..', config.inFile))
    , completed = 0

  logger.progress(0, data.length)

  function each (lib, i, callback) {
    if ((typeof lib.name === 'string')&&
        (typeof lib.url === 'string')&&
        (typeof lib.description === 'string')&&
        (typeof lib.source !== 'undefined')) {
      processLib(config, logger, lib, function (err, lib) {
        logger.progress(++completed, data.length)
        callback(err, lib)
      })
    }
  }

  function done (err, data) {
    if (err)
      return console.error(err.red)
    finish(config, logger, data)
  }

  map(data, each, done)
}

module.exports = main