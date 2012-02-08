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

var Main = {

    start: function() {
      this.completed = 0
      this.outList = []
      this.input.read(this.inputData.bind(this))
    }

    // we've read in and parsed the data
  , inputData: function(err, data) {
      if (err)
        return console.log(err.red)
      !(this.data = data).forEach(this.processor.processLibrary.bind(this.processor))
    }
 
    // called when a library won't be included in the output, for whatever reason
  , error: function(lib, err) {
      this.libComplete()
      this.logger.log(ERROR, lib.name || 'UNKNOWN LIBRARY', err, lib.source ? lib.source : null)
      this.progress()
    }

    // called when the library will be included but there is something odd
  , warn: function(lib, warning) {
      this.logger.log(WARNING, lib.name, warning)
      this.progress()
    }

    // called when the library is checked and sized and ready to pack into the output
  , success: function(lib, sizes) {
      lib.sizes = sizes
      // overwrite the original size estimate with actual size
      lib.size = strings.sizeToString(sizes.gzipped)
      this.outList.push(lib)
      this.libComplete()
      this.logger.log(
          SUCCESS
        , lib.name
        , (  'raw: ' + strings.lpad(strings.sizeToString(sizes.raw), 8)
           + ', minified: ' + strings.lpad(strings.sizeToString(sizes.minified), 8)
           + ', gzipped: ' + strings.lpad(strings.sizeToString(sizes.gzipped), 8)
          ))
      this.progress()
    }

    // called on error or success, to iterate our counter and write the output if we're all done
  , libComplete: function() {
      if (++this.completed === this.data.length) {
        // do this async because it's called before the last progress bar print
        setTimeout(async.apply(this.output.write.bind(this.output), this.outList, function(err) {
          if (err)
            return console.log(('Error writing to output file: ' + err).red.bold)
          console.log('All done and ready to deploy!'.green.bold)
        }), 0)
      }
    }

    // shortcut
  , progress: function() {
      this.logger.progress(this.completed, this.data.length)
    }
}

module.exports.create = function(config) {
  var main = Object.create(Main)
  main.input = require('./input').create(config.inFile)
  main.output = require('./output').create(config.outFile)
  main.processor = require('./processor').create(main, config)
  main.logger = require('./logger').create(config.verbose)
  return main
}
