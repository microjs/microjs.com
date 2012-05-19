var events = require('events')
  , request = require('request')
  , TWITTER_API_URL = 'http://urls.api.twitter.com/1/urls/count.json?url={url}'

var TwitterStats = {
    processLibrary: function (lib, callback) {
      request(
          TWITTER_API_URL.replace('{url}', encodeURIComponent(lib.url))
        , function (err, response, body) {
            if (err)
              return callback('Error requesting tweet count from Twitter for ' + lib.url + ': ' + err)
            var data = JSON.parse(body)

            if (typeof data.count == 'number') {
              callback(null, data)
            } else {
              this.emit('warning', lib, 'Couldn\'t get tweet count from Twitter API')
              callback()
            }
          }.bind(this)
      )
    }
}

TwitterStats.__proto__ = events.EventEmitter.prototype

module.exports.create = function () {
  var twitterStats = Object.create(TwitterStats)
  events.EventEmitter.call(twitterStats)
  return twitterStats
}