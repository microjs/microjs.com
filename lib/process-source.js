const EventEmitter = require('events').EventEmitter
    , map          = require('map-async')
    , fetch        = require('./fetcher')
    , sizer        = require('./sizer')
    , validator    = require('./validator')

function processSource (ee, lib, source, callback) {
  var match
    , zipEntry

  if (/\d\.\d/.test(source))
    ee.emit('warning', 'appears to have a versioned source, please check that it is current')

  // whoa, source is in the source
  if (!/^(http|ftp)/.test(source) && /function/.test(source)) {
    lib.novalidate = true
    return callback(null, source)
  }

  // source is a zip with a bang-path to the file within the zip?
  if (match = source.match(/^(.*\.zip)!\/(.*$)/)) {
    source   = match[1]
    zipEntry = match[2]
  }

  fetch(source, zipEntry, function (err, d) {
    if (err)
      return callback(err)
    callback(null, d)
  })
}

function complete (config, lib, data, callback) {
  var err = validator.raw(data)
  if (err)
    return callback(err)

  // phew, we got this far, now calculate the 3 sizes and get to success()
  sizer(data, function (err, sizes) {
    if (err)
      return callback(err)

    var insane = !lib.novalidate && validator.size(config, lib, sizes)
    if (insane)
      return callback(insane + ', ignoring')

    // holy moly! we got here?
    callback(null, sizes)
  })
}

function processLib (config, lib, callback) {
  var ee = new EventEmitter()

  if (!lib.name) {
    process.nextTick(callback.bind(null, 'library has no name, ignoring'))
    return ee
  }

  if (!lib.source) {
    process.nextTick(callback.bind(null, 'has no source, ignoring'))
    return ee
  }

  // this is slightly awkward so we can support arrays of sources, otherwise
  // it'd be simple, but who wants simple?
  // concat all the file contents together and we do it in series because
  // order may matter for minification
  map(
      Array.isArray(lib.source) ? lib.source : [ lib.source ]
    , function (source, i, callback) {
        processSource(ee, lib, source, callback)
      }
    , function (err, sources) {
        if (err)
          return callback(err)
        complete(config, lib, sources.join('\n'), callback)
      }
  )

  return ee
}

module.exports = processLib