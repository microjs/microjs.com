var fs = require('fs')
  , async = require('async')

// pretty straightforward, read file, eval it, extract data
var Input = {
    read: function(callback) {
      fs.readFile(this.inFile, 'utf-8', this.fileData.bind(this, callback))
    }

  , fileData: function(callback, err, data) {
      if (err)
        return callback('Error reading file "' + this.inFile + '": ' + err)

      try {
        eval(data)
      } catch (ex) {
        return callback('Error parsing data from file "' + this.inFile + '": ' + ex)
      }

      if (typeof MicroJS === 'undefined')
        return callback('Error extracting data from file "' + this.inFile + '": ' + ex)

      callback(null, MicroJS)
    }
}

module.exports.create = function(inFile) {
  var input = Object.create(Input)
  input.inFile = inFile
  return input
}