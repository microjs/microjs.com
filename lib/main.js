/**
  * By Rod Vagg @rvagg
  * No tests here unfortunately, this was done in a mad Saturday afternoon
  * as a crazy experiment. So caveat emptor!
  */

var async = require('async')
  , colors = require('colors')
  , strings = require('./strings')
  , logger = require('./logger')
  , ERROR = logger.ERROR
  , SUCCESS = logger.SUCCESS
  , WARNING = logger.WARNING

require('date-utils') // augments Date

var Main = {

    start: function () {
      process.on('uncaughtException', function (err) {
        console.log(('Caught exception: ' + err).red,'\n')
        console.log(err.stack)
      })
      this.ticks = 0
      this.errorCount = 0
      this.outList = []
      this.input.read(this.inputData.bind(this))
    }

    // we've read in and parsed the data
  , inputData: function (err, data) {
      if (err)
        return console.log(err.red)

      this.data = data
      this.expectedTicks = data.length// * 2 // 2 ticks each lib, one for `process`, one for `gitstats`

      async.forEach(
          data
        , this.tickWrap(this.processor.processLibrary, this.processor)
        , this.finish.bind(this)
      )
    }
 
    // wrap the function in another function that will increment 'ticks' and call progress() for us
  , tickWrap: function (fn, ctx) {
      return function (lib, callback) {
        fn.call(ctx, lib, function () {
          this.ticks++
          this.progress()
          callback()
        }.bind(this))
      }.bind(this)
    }

    // called when a library won't be included in the output, for whatever reason
  , error: function (lib, err, callback) {
      this.logger.log(ERROR, lib.name || 'UNKNOWN LIBRARY', err, lib.source ? lib.source : null)
      this.errorCount++
      callback()
    }

    // called when the library will be included but there is something odd
  , warn: function (lib, warning) {
      this.logger.log(WARNING, lib.name, warning)
      this.progress() // need to call this to redraw the progress bar after printing the warning
    }

    // called when the library is checked and sized and ready to pack into the output
  , success: function (lib, sizes, callback) {
      this.gitstats.processLibrary(lib, this.complete.bind(this, lib, sizes, callback))
    }

  , complete: function (lib, sizes, callback) {
      if (lib.ghlastpush && new Date(lib.ghlastpush).isBefore(this.ghLastPushCutoff)) {
        this.warn(lib,'Too old! Last pushed to GitHub @ ' + new Date(lib.ghlastpush).toFormat('DD/MMM/YY') + ', ignoring')
        callback()
      } else {
        // cleanup so we don't waste space
        delete lib.ghlastpush
        delete lib.source
        delete lib.github
        // overwrite the original size estimate with actual size
        lib.size = strings.sizeToString(sizes.gzipped)

        this.atom.processLibrary(lib, function (err) {
          if (err) {
            console.log(('Error processing Atom feed data: ' + err).red)
            return process.exit(1)
          }
          this.outList.push(lib)
          this.logger.log(
              SUCCESS
            , lib.name
            , (  'raw: ' + strings.lpad(strings.sizeToString(sizes.raw), 8)
               + ', minified: ' + strings.lpad(strings.sizeToString(sizes.minified), 8)
               + ', gzipped: ' + strings.lpad(strings.sizeToString(sizes.gzipped), 8)
              ))
          callback()
        }.bind(this))
      }
    }

  , gitSuccess: function (lib, ghData, callback) {
      if (ghData) {
        lib.ghwatchers = strings.prettyLong(ghData.watchers)
        lib.ghforks = strings.prettyLong(ghData.forks)
        lib.ghlastpush = ghData.lastPush
      }
      callback()
    }

    // called on error or success, to iterate our counter and write the output if we're all done
  , finish: function () {
      this.output.write(this.outList, function (err) {
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
    }

    // shortcut
  , progress: function () {
      this.logger.progress(this.ticks, this.expectedTicks)
    }
}

module.exports.create = function (config) {
  var main = Object.create(Main)
  main.input = require('./input').create(config.inFile)
  main.output = require('./output').create(config.outFile)
  main.processor = require('./processor').create(main, config)
  main.gitstats = require('./gitstats').create(main, config)
  main.atom = require('./atom')
  main.logger = require('./logger').create(config)
  main.ghLastPushCutoff = new Date().addMonths(-(config.githubLastPushCutoffMonths))
  main.quiet = config.quiet
  main.errorCountThreshold = config.errorCountThreshold
  return main
}
