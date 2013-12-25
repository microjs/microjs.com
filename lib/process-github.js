const EventEmitter = require('events').EventEmitter
    , fetchHttp    = require('./fetch-http')

const githubSpecRegex  = /^([^\/]+)\/(.*)$/
    , repoRegex        = /github.com\/([\.\-\w]+)\/([^$\/]+)/
    , GIT_API_REPO_URL = 'https://api.github.com/repos/{user}/{project}'

function processRepo (config, ee, lib, user, project, callback) {
  var url     = GIT_API_REPO_URL.replace('{user}', user).replace('{project}', project)
    , headers = { 'User-Agent' : 'microjs.com-build-script' }
    , auth    = config.ghUser + ':' + config.ghToken

  function handle (err, content) {
    if (err)
      return callback('Error requesting repo data from GitHub for ' + user + '/' + project + ': ' + err)

    var data = JSON.parse(content.toString())
    if (typeof data.forks == 'number' && typeof data.watchers == 'number') {
      return callback(null, {
          forks: data.forks
        , watchers: data.watchers
        , url: data.html_url
        , lastPush: data.pushed_at
        //, user: user
        //, project: project
      })
    }

    ee.emit(
        'warning'
      , typeof data.message == 'string'
          ? 'GitHub says: ' + data.message
          : 'Looks like a GitHub project but can\'t get data from GitHub API'
    )
    callback()
  }

  fetchHttp(url, { auth: auth, headers: headers }, handle)
}

function processGithub (config, lib, callback) {
  var ee = new EventEmitter()
    , match

  if (!config.ghUser) {
    process.nextTick(callback)
    return ee
  }

  if (lib.github)
    match = lib.github.match(githubSpecRegex)
  if (!match)
    match = lib.url.match(repoRegex)
  if (!match)
    match = lib.source.match(repoRegex)

  if (match && match[1] != 'gist')
    processRepo(config, ee, lib, match[1], match[2], callback)
  else
    process.nextTick(callback)

  return ee
}

module.exports = processGithub