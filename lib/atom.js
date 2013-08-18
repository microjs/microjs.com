const uuid          = require('node-uuid')
    , fs            = require('fs')
    , memo          = require('async-memo')
    , moment        = require('moment')
    , xml           = require('./xml')

const file          = 'atom.xml'
    , footRegex     = /(\n<\/feed>\n?)/
    , dateStr       = moment.utc().format('YYYY-MM-DD\'T\'HH:mm:ssZ')
    , entryTemplate =
          '\t<entry>\n'
        + '\t\t<title>{xmlEncodedName}</title>\n'
        + '\t\t<link href="{url}" />\n'
        + '\t\t<id>urn:uuid:{atomUuid}</id>\n'
        + '\t\t<updated>{atomDate}</updated>\n'
        + '\t\t<summary>{xmlEncodedDescription}</summary>\n'
        + '\t</entry>\n\n'
        + '$1'
      // memoize so we only read once, but keep contents global so we can edit it
    , fileContents = memo(
        function (callback) {
          fs.readFile(file, 'utf-8', function (err, _contents) {
            contents = _contents
            callback(err)
          })
        })

var contents

function escapeRegExp (string) {
  return string.replace(/[\-\[\]\{\}\(\)*+?.\\\^$|,#\s]/g, function (match) { return '\\' + match })
}

function exists (contents, lib) {
  return new RegExp(escapeRegExp('<title>' + lib.xmlEncodedName + '</title>')).test(contents)
}

function t (s, d) {
  for (var p in d)
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p])
  return s
}

function processLibrary (lib, callback) {
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
    ;delete lib.xmlEncodedName
    ;delete lib.xmlEncodedDescription
    callback()
  })
}

function write (callback) {
  fs.writeFile(file, contents, 'utf-8', callback)
}

module.exports.processLibrary = processLibrary
module.exports.write          = write