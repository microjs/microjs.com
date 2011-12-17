var uglifyParser = require('uglify-js').parser
  , uglifyMangler = require('uglify-js').uglify
  , gzip = require('gzip')

// calculate the 3 sizes, raw, minified & gzipped
module.exports = function(source, callback) {
  try {
    var minified =
      uglifyMangler.gen_code(
        uglifyMangler.ast_squeeze(
          uglifyMangler.ast_mangle(
            uglifyParser.parse(source))))

    gzip(minified, function(err, data) {
      if (err) callback(err)
      else {
        callback(null, {
            raw: source.length
          , minified: minified.length
          , gzipped: data.length
        })
      }
    })
  } catch (ex) {
    callback && callback(ex)
  }
}
