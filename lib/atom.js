var uuid = require('node-uuid')
  , fs = require('fs')
  , async = require('async')
  , xml = require('./xml')

require('date-utils')

var file = 'atom.xml'
  , footRegex = /(\n<\/feed>\n)/
  , dateStr = new Date().addMinutes(new Date().getTimezoneOffset()).toFormat('YYYY-MM-DD\'T\'HH24:MI:SSZ')
  , entryTemplate =
        '\t<entry>\n'
      + '\t\t<title>{xmlEncodedName}</title>\n'
      + '\t\t<link href="{url}" />\n'
      + '\t\t<id>urn:uuid:{atomUuid}</id>\n'
      + '\t\t<updated>{atomDate}</updated>\n'
      + '\t\t<summary>{xmlEncodedDescription}</summary>\n'
      + '\t</entry>\n\n'
      + '$1'
  , contents

    // memoize so we only read once, but keep contents global so we can edit it
  , fileContents = async.memoize(
        function (callback) {
          fs.readFile(file, 'utf-8', function (err, _contents) {
            contents = _contents
            callback(err)
          })
        }
      , function () { return '_' }
    )

  , escapeRegExp = function (string) {
      return string.replace(/[\-\[\]\{\}\(\)*+?.\\\^$|,#\s]/g, function (match) { return '\\' + match })
    }

  , exists = function (contents, lib) {
      return new RegExp(escapeRegExp('<title>' + lib.xmlEncodedName + '</title>')).test(contents)
    }

  , t = function (s, d){
      for (var p in d)
        s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
      return s
    }

  , processLibrary = function (lib, callback) {
      fileContents(function (err) {
        if (err)
          throw err

        lib.xmlEncodedName = xml.encodeXmlEntities(lib.name)
        if (exists(contents, lib))
          return callback()

        lib.atomUuid = uuid.v1()
        lib.atomDate = dateStr
        lib.xmlEncodedDescription = xml.encodeXmlEntities(lib.description)
        contents = contents.replace(footRegex, t(entryTemplate, lib))
        ;delete lib.atomUuid
        ;delete lib.atomDate
        callback()
      })
    }

  , write = function (callback) {
      fs.writeFile(file, contents, 'utf-8', callback)
    }

module.exports = {
    processLibrary: processLibrary
  , write: write
}
