module.exports = {
    inFile                     : 'data.js'
  , outFile                    : 'data-min.js'
    // for now; need to tweak this later
  , githubLastPushCutoffMonths : 48
  , sizeExceptions             : [
        'Backbone'
      , 'Zepto'
    ]
  , minifyExceptions           : [
        'cm.js'
    ]
  , errorCountThreshold        : 10
  , maxGzipped                 : 5 * 1024
    // these 3 are basic sanity cecks, minimums that we would expect the contents
    // to be, otherwise something might be wrong
  , minRaw                     : 300
  , minMinified                : 150
  , minGzipped                 : 100
    // this is to compare raw with minified, if it's too close then we may have
    // been given the minified source in the first place
  , minifierTollerance         : 50
    // give them this much wriggle room with the reported 'size' vs actual gzipped size
  , expectedTolleranceFraction : 0.5
}