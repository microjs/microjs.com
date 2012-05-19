var colors = require('colors')
  , fs = require('fs')
  , strings = require('./strings')

var Stats = {
    start: function () {
      this.input.read(this.inputData.bind(this))
    }

  , inputData: function (err, data) {
      if (err)
        return console.log(err.red)

      var byTag = {}
        , byCount = {}
        , byMainTag = {}
        , optReg = /^\s+<option value="(\w+)">/gm
        , contents = String(fs.readFileSync('index.html', 'utf-8'))
        , mainTags = String(contents).match(optReg).map(function (o) { return o.match(new RegExp(optReg.source))[1] })
        , pushTag = function (hash, tag, d) {
            (hash[tag] || (hash[tag] = [])).push(d)
          }

      data.forEach(function (d) {
        d.tags && d.tags.forEach(function (tag) {
          pushTag(byTag, tag, d)
          mainTags.indexOf(tag) != -1 && pushTag(byMainTag, tag, d)
        })
      })

      console.log('TAG COUNTS'.green.bold, '  (all tags found in data.js)')
      console.log(strings.rpad('Count', 7).yellow.bold, 'Tags'.bold)
      console.log('------------'.bold)

      Object.keys(byTag).forEach(function (tag) {
        (byCount[byTag[tag].length] || (byCount[byTag[tag].length] = [])).push(tag)
      })

      Object.keys(byCount).sort(function (x, y) { return x - y }).forEach(function (count) {
        console.log(strings.rpad(String(count), 7).yellow.bold, byCount[count].sort().join(', '))
      })

      console.log('\nMAIN TAGS'.green.bold, '  (only tags used in index.html)')
      console.log(strings.rpad('Tag', 13).yellow.bold, 'Count  Libs'.bold)
      console.log('-------------------------'.bold)

      mainTags.forEach(function (tag) {
        var h = byMainTag[tag]
        console.log(
            strings.rpad(tag, 13).yellow.bold
          , strings.rpad(String(h ? h.length : 0), 6).bold
          , h ? h.map(function (d) { return d.name }).sort().join(', ') : ''
        )
      })
    }
}


module.exports.create = function(config) {
  var stats = Object.create(Stats)
  stats.input = require('./input').create(config.inFile)
  return stats
}