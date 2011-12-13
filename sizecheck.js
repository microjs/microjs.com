/* Size checker for microjs.com, initial version by @rvagg */

var fs = require('fs')
  , http = require('http')
  , https = require('https')
  , url = require('url')
  , colors = require('colors')
  , async = require('async')
  , uglifyParser = require('uglify-js').parser
  , uglifyMangler = require('uglify-js').uglify
  , gzip = require('gzip')

var allowedTollerance = 0.1 // how many K are we allowing libs to be out by?
  , file = 'data.js'

function kbytes(b) {
  return Math.round(b / 1024 * 10) / 10 // 1 decimal place
}

// run through uglify and gzip to get respective sizes
function compressedSize(source, callback) {
  try {
    var minified =
      uglifyMangler.gen_code(
        uglifyMangler.ast_squeeze(
          uglifyMangler.ast_mangle(
            uglifyParser.parse(source))))

    gzip(minified, function(err, data) {
      if (err) callback(err)
      else {
        callback(null, {
            minified: kbytes(minified.length)
          , gzipped: kbytes(data.length)
        })
      }
    })
  } catch (ex) {
    callback && callback(ex)
  }
}

// fetch from the specified URL
function download(sourceUrl, callback) {
  var parsedUrl = url.parse(sourceUrl)
    , source = ''
    , finish = function() {
        var js = source.split('{').length
          , html = source.split('<').length
        if (js < html || source.trim().length === 0) {
          console.log(
            '\tThe source I\'ve downloaded from '.yellow + sourceUrl.red + ' doesn\'t look like JavaScript so I\'m ignoring it!'.yellow
          )
          callback && callback(true)
        } else {
          // looks like JavaScript! Calculate and record sizes
          compressedSize(source, function(err, sizes) {
            if (err) {
              console.log('\tThere was an error parsing the source from '.yellow + sourceUrl.red + (': ' + (err.message || err)).yellow)
              callback(err)
            } else {
              sizes.raw = kbytes(source.length)
              callback && callback(null, sizes)
            }
          })
        }
      }

  !(/https/.test(parsedUrl.protocol) ? https : http).get(parsedUrl, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(d) { source += d })
    res.on('end', finish)
  }).on('error', function(e) {
    console.log('\tThere was an error downloading the source from '.yellow + sourceUrl.red + (': ' + e).yellow)
    callback && callback()
  })

}

// process the MicroJS data from the data.js file
function process(data, callback) {
  async.forEachSeries(data, function (lib, callback) {
    if (lib.name) { 
      if (!lib.source)
        console.log('Library "'.yellow + lib.name.red + '" has no source; fishy! Potential lies!'.yellow)
      else if (!lib.size)
        console.log('Library "'.yellow + lib.name.red + '" has no size entry, please fix!'.yellow)
      else {
        console.log('Checking ' + lib.name + ': ' + lib.source)
        download(lib.source, function(err, sizes) {
          if (err) callback && callback()
          else {
            var claimed = parseFloat(lib.size.replace(/[^\d\.]/g,''), 10)
              , diff = sizes.gzipped - claimed
              , indicator = 'green'
              , note = ''
            if (diff < -allowedTollerance) {
              indicator = 'yellow'
              note = ' WIN! Give that coder a medal and fix up that entry!'
            } else if (diff > allowedTollerance) {
              indicator = 'red'
              note = ' Bzzt! Not cool, fix that entry up!'
            }

            console.log(
              ('\tRaw: ' + sizes.raw + ' KB, Minified: ' + sizes.minified + ' KB, Gzipped: ' + sizes.gzipped + ' KB, Claimed: ' + claimed + ' KB' + note)
              [indicator]
            )
            callback && callback()
          }
        })
        return
      }
    }
    callback && callback()
  }, callback)
}

// RUN!
async.waterfall([
    async.apply(fs.readFile, file, 'utf-8')
  , function (data, callback) {
      eval(data)
      callback && callback(null, MicroJS)
    }
  , process
])

