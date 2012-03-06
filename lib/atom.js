var uuid = require('node-uuid')
  , fs = require('fs')
require('date-utils')

var file = 'atom.xml'
  , footRegex = /(\n<\/feed>\n)/
  , dateStr = new Date().addMinutes(new Date().getTimezoneOffset()).toFormat('YYYY-MM-DD\'T\'HH24:MI:SSZ')
  , entryTemplate =
        '\t<entry>\n'
      + '\t\t<title>{name}</title>\n'
      + '\t\t<link href="{url}" />\n'
      + '\t\t<id>urn:uuid:{atomUuid}</id>\n'
      + '\t\t<updated>{atomDate}</updated>\n'
      + '\t\t<summary>{description}</summary>\n'
      + '\t</entry>\n\n'
      + '$1'
  , contents

  , init = function (callback) {
      if (contents)
        return callback()
      fs.readFile(file, 'utf-8', function (err, data) {
        if (err)
          return callback(err)

        contents = data
        callback()
      })
    }

  , exists = function (lib) {
      return new RegExp('<title>' + escapeRegExp(lib.name) + '</title>').test(contents)
    }

  , t = function (s, d){
      for (var p in d)
        s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
      return s
    }

  , processLibrary = function (lib, callback) {
      init(function () {
        if (exists(lib))
          return callback()

        lib.atomUuid = uuid.v1()
        lib.atomDate = dateStr
        contents = contents.replace(footRegex, t(entryTemplate, lib))
        delete lib.atomUuid
        delete lib.atomDate
        callback()
      })
    }

  , write = function (callback) {
    //console.log('write',contents)
      fs.writeFile(file, contents, 'utf-8', callback)
    }

  , escapeRegExp = function (string) {
      return string.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function (match) { return '\\' + match })
    }

module.exports = {
    processLibrary: processLibrary
  , write: write
}
