const minify = require('uglify-es').minify
    , gzip   = require('zlib').gzip

// calculate the 3 sizes, raw, minified & gzipped
function sizer (source, callback) {
  var minified
  
  if(!source || !source.length){
    return callback('No source code found.')
  }
  
  if(source === '404: Not Found\n'){
    return callback('404: Source code not found.')
  }
  
  try {
    minified = minify(source).code
  } catch (ex) {
    return callback('Uglify error: ' + (ex && ex.message ? ex.message : ex))
  }
  
  if(!minified){
    return callback('Uglify failed.')
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