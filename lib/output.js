const fs   = require('fs')

const HEAD = 'var MicroJS='
    , FOOT = ';'

// write out the data, effectively minified by JSON.stringify

function output (outFile, data, callback) {
  data = HEAD + JSON.stringify(data) + FOOT
  fs.writeFile(outFile, data, 'utf8', callback)
}

module.exports = output