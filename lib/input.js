/*globals MicroJS*/

const fs    = require('fs')

// pretty straightforward, read file, eval it, extract data
function read (inFile, callback) {
  fs.readFile(inFile, 'utf-8', function (err, data) {
    if (err)
      return callback('Error reading file "' + inFile + '": ' + err)

    try {
      eval(data)
    } catch (ex) {
      return callback('Error parsing data from file "' + inFile + '": ' + ex)
    }

    if (typeof MicroJS === 'undefined')
      return callback('Error extracting data from file "' + inFile + '": no `MicroJS`')

    callback(null, MicroJS)
  })
}

module.exports = read