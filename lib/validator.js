var sizeToString = require('./strings').sizeToString
    // what counts as a 'micro', in bytes
  , MAX_GZIPPED = 5 * 1024
    // these 3 are basic sanity cecks, minimums that we would expect the contents
    // to be, otherwise something might be wrong
  , MIN_RAW = 300
  , MIN_MINIFIED = 200
  , MIN_GZIPPED = 100
    // this is to compare raw with minified, if it's too close then we may have
    // been given the minified source in the first place
  , MINIFIER_TOLLERANCE = 50
    // give them this much wriggle room with the reported 'size' vs actual gzipped size
  , EXPECTED_TOLLERANCE_FRACTION = .5

module.exports = {
    raw: function(data) {
      var len = data.trim().length
        , js = data.split('{').length
        , html = data.split(/<\s*\w+/).length

      if (len === 0) return 'zero-length source'
      if (js < html && data.indexOf("<html>") > -1) return 'source looks like HTML'
    }

  , sizes: function(sizes) {
      if (Math.abs(sizes.raw - sizes.minified) <= MINIFIER_TOLLERANCE)
        return 'source seems to be already minified (link to unminified source)'
      if (sizes.raw <= MIN_RAW)
        return 'raw size is suspiciously small: ' + sizeToString(sizes.raw)
      if (sizes.minified <= MIN_MINIFIED)
        return 'minified size is suspiciously small: ' + sizeToString(sizes.minified)
      if (sizes.gzipped <= MIN_GZIPPED)
        return 'gzipped size is suspiciously small: ' + sizeToString(sizes.gzipped)
      if (sizes.gzipped > MAX_GZIPPED)
        return 'gzipped file too big, ' + sizeToString(sizes.gzipped) + ' is not "micro"'
    }

  , compareExpected: function(sizes, expected) {
      if (Math.abs(sizes.gzipped - expected) / sizes.gzipped > EXPECTED_TOLLERANCE_FRACTION)
        return 'expected size of ' + sizeToString(expected) + ' is very different from actual gzipped size: ' + sizeToString(sizes.gzipped)
    }
}
