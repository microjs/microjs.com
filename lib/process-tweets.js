const EventEmitter = require('events').EventEmitter
    , fetchHttp    = require('./fetch-http')

const TWITTER_API_URL = 'http://urls.api.twitter.com/1/urls/count.json?url={url}'

function processTweets (config, lib, callback) {
  var ee = new EventEmitter()

  fetchHttp(
      TWITTER_API_URL.replace('{url}', encodeURIComponent(lib.url))
    , function (err, content) {
        if (err)
          return callback('Error requesting tweet count from Twitter for ' + lib.url + ': ' + err)

        var data = JSON.parse(content.toString())

        if (typeof data.count == 'number') {
          callback(null, data)
        } else {
          ee.emit('warning', 'Couldn\'t get tweet count from Twitter API')
          callback()
        }
      }
  )

  return ee
}

module.exports = processTweets