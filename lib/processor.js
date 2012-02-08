var async = require('async')
  , fetch = require('./fetcher')
  , sizer = require('./sizer')

var Processor = {
    // called for each library, async
    // we must call either error() or success() at some point
    processLibrary: function(lib) {
      if (!lib.name)
        return this.error(lib, 'library has no name, ignoring')

      if (!lib.source)
        return this.error(lib, 'has no source, ignoring')

      if (!lib.size)
        return this.error(lib, 'has no size estimate, ignoring')

      var sources = Array.isArray(lib.source) ? lib.source : [ lib.source ]

      var data = ''
        , warned = false
        , self = this

      // this is slightly awkward so we can support arrays of sources, otherwise
      // it'd be simple, but who wants simple?
      // concat all the file contents together and we do it in series because
      // order may matter for minification
      async.forEachSeries(
          sources
        , function(source, callback) {
            var match
              , zipEntry

            if (/\d\.\d/.test(source) && !warned) {
              self.warn(lib, 'appears to have a versioned source, please check it\'s current')
              warned = true
            }

            // whoa, source is in the source
            if (!/^(http|ftp)/.test(source) && /function/.test(source)) {
              lib.novalidate = true
              data += source
              callback()
            } else {
              // source is a zip with a bang-path to the file within the zip?
              if (match = source.match(/^(.*\.zip)!\/(.*$)/)) {
                source = match[1]
                zipEntry = match[2]
              } else
                zipEntry = null

              fetch(source, zipEntry, function(err, d) {
                if (err)
                  return callback(err)
                // append data because it can be split across multiple files
                data += d
                callback()
              })
            }
          }
        , function(err) {
            self.downloaded(lib, err, data)
          }
      )
    }

  , downloaded: function(lib, err, data) {
      if (err || (err = this.validator.raw(data)))
        return this.error(lib, err + ', ignoring')
      // phew, we got this far, now calculate the 3 sizes and get to success()
      sizer(data, async.apply(this.processed.bind(this), lib))
    }

  , processed: function(lib, err, sizes) {
      if (err)
        return this.error(lib, err)
      // 2 checks here, 'insane' for fairly obvious issues (error) and 'strange' for
      // a poor comparison between expected size (from data file) and actual gzipped
      // size (warn)
      var insane = !lib.novalidate && this.validator.sizes(lib, sizes)
        , expectedSize = !insane && lib.size && parseFloat(lib.size.replace(/[^\d\.]/g,'')) * 1024
        , strange = !insane && !lib.novalidate && this.validator.compareExpected(sizes, expectedSize)
      if (insane)
        return this.error(lib, insane + ', ignoring')
      if (strange)
        this.warn(lib, strange)
      // holy moly! we got here?
      this.success(lib, sizes)
    }
}

module.exports.create = function(main, config) {
  var processor = Object.create(Processor)
  processor.error = main.error.bind(main)
  processor.success = main.success.bind(main)
  processor.warn = main.warn.bind(main)
  processor.validator = require('./validator').create(config)
  return processor
}
