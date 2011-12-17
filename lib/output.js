var fs = require('fs')
  , HEAD = 'var MicroJS='
  , FOOT = ';'

// write out the data, effectively minified by JSON.stringify
var Output = {
  write: function(data, callback) {
    data = HEAD + JSON.stringify(data) + FOOT
    fs.writeFile(this.file, data, 'utf8', callback)
  }
}

module.exports.create = function(file) {
  var output = Object.create(Output)
  output.file = file
  return output
}
