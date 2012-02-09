var https = require('https')
  , http = require('http')
  , url = require('url')
  , zip = require('zip')
  , Buffer = require('buffer').Buffer

function unzip(zipEntry, data) {
  var reader = zip.Reader(new Buffer(data, 'binary'))
  data = null
  // iterate through zipfile entries looking for the right name
  reader.forEach(function(entry) {
    if (zipEntry === entry._header.file_name) {
      data = entry._stream.toString();
    }
  })
  return data
}

module.exports = function(sourceUrl, zipEntry, callback) {
  // this is broken up into multiple functions because it
  // can support 30[23]'s (in theory) but I'm not very happy with
  // the implementation so at the moment it needs direct URL
  var source = ''
    , finish = function() {
        if (zipEntry && !(source = unzip(zipEntry, source)))
          return callback('could not find entry "' + zipEntry + '" inside zip file')
        callback(null, source)
      }
    , timeout = function(request) {
        request.abort()
        callback('connection timed out')
      }
    , makeRequest = function(sourceUrl) {
        var parsedUrl = url.parse(sourceUrl)
          , request = (/https/.test(parsedUrl.protocol) ? https : http)
              .get(parsedUrl, handleResponse)
              .on('error', callback)
        request.setTimeout(10 * 1000, timeout.bind(null, request)) // 10 seconds is reasonable isn't it?
      }
    , handleResponse = function(response) {
        response.setEncoding(zipEntry ? 'binary' : 'utf8')
        response.on('end', finish)
        response.on('data', function(d) {
          /*if (response.statusCode === 302)
            makeRequest(response.headers['location'])
          else*/
            source += d
        })
      }

  makeRequest(sourceUrl)
}
