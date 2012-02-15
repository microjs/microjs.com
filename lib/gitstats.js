var request = require('request')
  , githubSpecRegex = /^([^\/]+)\/(.*)$/
  , repoRegex = /github.com\/([\.\-\w]+)\/([^$/]+)/
  , GIT_API_REPO_URL = 'https://api.github.com/repos/{user}/{project}'

var GitStats = {
    processLibrary: function (lib, callback) {
      var match

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
          GIT_API_REPO_URL.replace('{user}', user).replace('{project}', project)
        , function (error, response, body) {
            if (error)
              return this.error(lib, 'Error requesting repo data from GitHub for ' + user + '/' + project + ': ' + error, callback)

            var data = JSON.parse(body)
            if (!!data.forks && !!data.watchers) {
              this.success(lib, {
                  forks: data.forks
                , watchers: data.watchers
                , url: data.html_url
                , lastPush: data.pushed_at
                //, user: user
                //, project: project
              }, callback)
            } else {
              this.warn(lib, 'Looks like a GitHub project but can\'t get data from GitHub API')
              callback()
            }
          }.bind(this)
      )
    }
}

module.exports.create = function (main, config) {
  var gitStats = Object.create(GitStats)
  gitStats.success = main.gitSuccess.bind(main)
  gitStats.warn = main.warn.bind(main)
  gitStats.error = main.error.bind(main)
  return gitStats
}
