var events = require('events')
  , request = require('request')
  , githubSpecRegex = /^([^\/]+)\/(.*)$/
  , repoRegex = /github.com\/([\.\-\w]+)\/([^$\/]+)/
  , GIT_API_REPO_URL = 'https://api.github.com/repos/{user}/{project}'

var GitStats = {
    processLibrary: function (lib, callback) {
      var match

      if (!this.user)
        return callback()
      if (lib.github)
        match = lib.github.match(githubSpecRegex)
      if (!match)
        match = lib.url.match(repoRegex)
      if (!match)
        match = lib.source.match(repoRegex)

      if (match && match[1] != 'gist')
        this.processRepo(lib, match[1], match[2], callback)
      else
        callback()
    }

  , processRepo: function (lib, user, project, callback) {
      request(
          {
              url: GIT_API_REPO_URL.replace('{user}', user).replace('{project}', project)
            , headers: { Authorization:  "Basic " + new Buffer(this.user + ":" + this.pass).toString('base64'), "User-Agent" : "objclibs.com-build-script" }
          }
        , function (err, response, body) {
            if (err)
              return callback('Error requesting repo data from GitHub for ' + user + '/' + project + ': ' + err)

            var data = JSON.parse(body)
            if (typeof data.forks == 'number' && typeof data.watchers == 'number') {
              callback(null, {
                  forks: data.forks
                , watchers: data.watchers
                , url: data.html_url
                , lastPush: data.pushed_at
                //, user: user
                //, project: project
              })
            } else {
              this.emit(
                  'warning'
                , lib
                , typeof data.message == 'string'
                    ? 'GitHub says: ' + data.message
                    : 'Looks like a GitHub project but can\'t get data from GitHub API'
              )
              callback()
            }
          }.bind(this)
      )
    }
}

GitStats.__proto__ = events.EventEmitter.prototype

module.exports.create = function (user, pass) {
  var gitStats = Object.create(GitStats)
  gitStats.user = user
  gitStats.pass = pass
  events.EventEmitter.call(gitStats)
  return gitStats
}
