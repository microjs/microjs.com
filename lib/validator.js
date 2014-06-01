var sizeToString        = require('./strings').sizeToString

function raw (data) {
  var len  = data.trim().length
    , js   = data.split('{').length
    , html = data.split(/<\s*\w+/).length

  if (len === 0)
    return 'zero-length source'
  if (js < html && data.indexOf('<html>') > -1)
    return 'source looks like HTML'
}

function size (config, lib, sizes) {
  var exception = config.minifyExceptions.indexOf(lib.name) > -1

  if (!exception && Math.abs(sizes.raw - sizes.minified) <= config.minifierTollerance)
    return 'source seems to be already minified (link to unminified source)'
  if (!exception && sizes.raw <= config.minRaw)
    return 'raw size is suspiciously small: ' + sizeToString(sizes.raw)
  if (!lib.tinyminify && sizes.minified <= config.minMinified)
    return 'minified size is suspiciously small: ' + sizeToString(sizes.minified)
  if (sizes.gzipped <= config.minGzipped)
    return 'gzipped size is suspiciously small: ' + sizeToString(sizes.gzipped)
  if (config.sizeExceptions.indexOf(lib.name) == -1 && sizes.gzipped > config.maxGzipped)
    return 'gzipped file too big, ' + sizeToString(sizes.gzipped) + ' is not "micro"'
}

module.exports.raw  = raw
module.exports.size = size