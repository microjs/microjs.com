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

process.on('uncaughtException', function (err) {
  console.log(('Uncaught exception: ' + err).red,'\n')
  console.log(err.stack)
})

var Main = {

    start: function () {
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
      this.expectedTicks = data.length

      async.forEach(
          data
        , this.processLibrary.bind(this)
        , this.finish.bind(this)
      )
    }
 
  , processLibrary: function (lib, callback) {
      async.parallel(
          {
              sizes: this.processor.processLibrary.bind(this.processor, lib)
            , ghstats: this.gitstats.processLibrary.bind(this.gitstats, lib)
            , twstats: this.twitterstats.processLibrary.bind(this.twitterstats, lib)
          }
        , function (err, data) {
            this.ticks++
            if (err) {
              this.error(lib, err)
              return callback()
            }
            this.complete(lib, data.sizes, data.ghstats, data.twstats, callback)
          }.bind(this)
      )
    }

  , complete: function (lib, sizes, ghstats, twstats, callback) {
      if (ghstats) {
        lib.ghwatchers = strings.prettyLong(ghstats.watchers)
        lib.ghforks = strings.prettyLong(ghstats.forks)
        lib.ghlastpush = ghstats.lastPush
      }
      if (lib.ghlastpush && new Date(lib.ghlastpush).isBefore(this.ghLastPushCutoff)) {
        this.warn(lib,'Too old! Last pushed to GitHub @ ' + new Date(lib.ghlastpush).toFormat('DD/MMM/YY') + ', ignoring')
        callback()
      } else {
        // cleanup so we don't waste space
        ;delete lib.ghlastpush
        ;delete lib.source
        ;delete lib.github
        // overwrite the original size estimate with actual size
        lib.size = strings.sizeToString(sizes.gzipped)
        lib.tweets = strings.prettyLong(twstats.count)

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
               + ', minified: ' + strings.lpad(strings.sizeToString(sizes.minified), 7)
               + ', gzipped: ' + strings.lpad(strings.sizeToString(sizes.gzipped), 6)
               + ', watchers: ' + strings.lpad(ghstats ? lib.ghwatchers : '-', 4)
               + ', forks: ' + strings.lpad(ghstats ? lib.ghforks : '-', 3)
               + ', tweets: ' + strings.lpad(lib.tweets, 4)
              ))
          this.progress()
          callback()
        }.bind(this))
      }
    }

    // called when a library won't be included in the output, for whatever reason
  , error: function (lib, err) {
      this.logger.log(ERROR, lib.name || 'UNKNOWN LIBRARY', err, lib.source ? lib.source : null)
      this.errorCount++
      this.progress()
    }

    // called when the library will be included but there is something odd
  , warn: function (lib, warning) {
      this.logger.log(WARNING, lib.name, warning)
      this.progress() // need to call this to redraw the progress bar after printing the warning
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

  , progress: function () {
      this.logger.progress(this.ticks, this.expectedTicks)
    }
  }

module.exports.create = function (config) {
  var main = Object.create(Main)
  main.input = require('./input').create(config.inFile)
  main.output = require('./output').create(config.outFile)
  main.processor = require('./processor').create(config)
  main.processor.on('warning', main.warn.bind(main))
  main.gitstats = require('./gitstats').create()
  main.gitstats.on('warning', main.warn.bind(main))
  main.twitterstats = require('./twitterstats').create()
  main.twitterstats.on('warning', main.warn.bind(main))
  main.atom = require('./atom')
  main.logger = require('./logger').create(config)
  main.ghLastPushCutoff = new Date().addMonths(-(config.githubLastPushCutoffMonths))
  main.quiet = config.quiet
  main.errorCountThreshold = config.errorCountThreshold
  return main
}