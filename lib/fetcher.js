var zip = require('zip')
  , request = require('request')

  , requestPool = { maxSockets: 10 }

  , unzip = function (zipEntry, buffer) {
      var reader = zip.Reader(buffer)
      data = null
      // iterate through zipfile entries looking for the right name
      reader.forEach(function(entry) {
        if (zipEntry === entry._header.file_name) {
          data = entry._stream.toString();
        }
      })
      return data
    }

  , fetch = function (sourceUrl, zipEntry, callback) {
      var options = {
              url: sourceUrl
            , encoding: zipEntry ? null : 'utf8'
            , timeout: 1 * 60 * 1000
            , pool: requestPool
          }
        , handle = function (err, response, body) {
            if (err)
              return callback(err)

            if (zipEntry && !(body = unzip(zipEntry, body)))
              return callback('could not find entry "' + zipEntry + '" inside zip file')

            callback(null, body)
          }

      request(options, handle)
    }

module.exports = fetch
