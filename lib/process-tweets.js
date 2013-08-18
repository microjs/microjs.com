const EventEmitter    = require('events').EventEmitter
    , hyperquest      = require('hyperquest')
    , bl              = require('bl')

const TWITTER_API_URL = 'http://urls.api.twitter.com/1/urls/count.json?url={url}'

function processTweets (config, lib, callback) {
  var ee = new EventEmitter()

  hyperquest(TWITTER_API_URL.replace('{url}', encodeURIComponent(lib.url)))
    .pipe(bl(function (err, content) {
        if (err)
          return callback('Error requesting tweet count from Twitter for ' + lib.url + ': ' + err)

        var data = JSON.parse(content.toString())

        if (typeof data.count == 'number') {
          callback(null, data)
        } else {
          ee.emit('warning', 'Couldn\'t get tweet count from Twitter API')
          callback()
        }
      }))

  return ee
}

module.exports = processTweets