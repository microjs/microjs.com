var request = require('request')
  , TWITTER_API_URL = 'http://urls.api.twitter.com/1/urls/count.json?url={url}'

var TwitterStats = {
    processLibrary: function (lib, callback) {
      request(
          TWITTER_API_URL.replace('{url}', encodeURIComponent(lib.url))
        , function (err, response, body) {
            if (err)
              return this.error(
                  lib
                , 'Error requesting tweet count from Twitter for ' + lib.url + ': ' + err
                , callback
              )
            var data = JSON.parse(body)

            if (typeof data.count == 'number') {
              callback(null, data)
            } else {
              this.warn(lib, 'Couldn\'t get tweet count from Twitter API')
              callback()
            }
          }.bind(this)
      )
    }
}

module.exports.create = function (main, config) {
  var twitterStats = Object.create(TwitterStats)
  twitterStats.warn = main.warn.bind(main)
  twitterStats.error = main.error.bind(main)
  return twitterStats
}