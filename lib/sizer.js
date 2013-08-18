const uglifyParser  = require('uglify-js').parser
    , uglifyMangler = require('uglify-js').uglify
    , gzip          = require('zlib').gzip

// calculate the 3 sizes, raw, minified & gzipped
function sizer (source, callback) {
  var minified
  try {
    minified =
      uglifyMangler.gen_code(
        uglifyMangler.ast_squeeze(
          uglifyMangler.ast_mangle(
            uglifyParser.parse(source))))
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