module.exports = {
    inFile                     : 'data.js'
  , outFile                    : 'data-min.js'
    // for now; need to tweak this later
  , githubLastPushCutoffMonths : 60
  , sizeExceptions             : [
        'Backbone'
      , 'Zepto'
    ]
  , minifyExceptions           : [
        'cm.js'
    ]
  , errorCountThreshold        : 10
    // normal limit is 5kb, but strictly enforce 6kb
  , maxGzipped                 : 6 * 1024
    // these 3 are basic sanity cecks, minimums that we would expect the contents
    // to be, otherwise something might be wrong
  , minRaw                     : 100
  , minMinified                : 50
  , minGzipped                 : 25
    // this is to compare raw with minified, if it's too close then we may have
    // been given the minified source in the first place
  , minifierTollerance         : 50
    // give them this much wriggle room with the reported 'size' vs actual gzipped size
  , expectedTolleranceFraction : 0.5
}