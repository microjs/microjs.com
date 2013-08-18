const minify = require('uglify-js').minify
    , gzip   = require('zlib').gzip

// calculate the 3 sizes, raw, minified & gzipped
function sizer (source, callback) {
  var minified

  try {
    minified = minify(source, { fromString: true }).code
  } catch (ex) {
    return callback('Uglify error: ' + (ex && ex.message ? ex.message : ex))
  }

  gzip(minified, function(err, data) {
    if (err) return callback(err)

    callback(null, {
        raw: source.length
      , minified: minified.length
      , gzipped: data.length
    })
  })
}

module.exports = sizer