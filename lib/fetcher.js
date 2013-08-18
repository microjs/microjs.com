var zip        = require('zip')
  , hyperquest = require('hyperquest')
  , bl         = require('bl')

function unzip (zipEntry, buffer) {
  var reader = zip.Reader(buffer)
    , data   = null

  // iterate through zipfile entries looking for the right name
  reader.forEach(function(entry) {
    if (zipEntry === entry._header.file_name) {
      data = entry._stream.toString();
    }
  })
  return data
}

function fetch (sourceUrl, zipEntry, callback) {
  hyperquest(sourceUrl, { headers: { 'User-Agent': 'microjs.com-build-script' } })
    .pipe(bl(function (err, content) {
      if (err)
        return callback(err)

      if (zipEntry) {
        try {
          content = unzip(zipEntry, content)
        } catch (e) {
          return callback('unzip error' + e)
        }

        if (!content)
          return callback('could not find entry ' + zipEntry + ' inside zip file')
      }

      callback(null, content.toString())
    }))
}

module.exports = fetch