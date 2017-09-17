const read       = require('read')
    , colors     = require('colors')
    , hyperquest = require('hyperquest')
    , bl         = require('bl')
    , path       = require('path')
    , fs         = require('fs')
    , mkdirp     = require('mkdirp')

function createAuth (config, callback) {
  var req = hyperquest(
      'https://api.github.com/authorizations'
    , {
          headers : {
              'X-GitHub-OTP' : config.ghOtp || null
            , 'User-Agent'   : 'microjs.com-build-script'
          }
        , method  : 'post'
        , auth    : config.ghUser + ':' + config.ghPass
      }
    )
  req.pipe(bl(function (err, data) {
    if (err)
      return callback(err)
    data = JSON.parse(data.toString())
    if (data.message)
      return callback(new Error(data.message))
    if (!data.token)
      return callback(new Error('No token from GitHub!'))

    config.ghToken = data.token
    callback()
  }))
  req.end(JSON.stringify({ note: 'microjs.com build script'}))
}

function prompt (config, callback) {
  console.log('To collect GitHub stats we need you to authenticate so we can exceed API rate-limiting.'.bold.green)
  console.log('Leave the username field blank to skip stats collection.'.bold.green)
  console.log()

  read({ prompt: 'GitHub username:'.bold }, function (err, data) {
    if (err) return callback(err)
    if (data === '') return callback()
    config.ghUser = data
    read({ prompt: 'GitHub password:'.bold, silent: true, replace: '\u2714' }, function (err, data) {
      if (err) return callback(err)
      config.ghPass = data
      read({ prompt: 'GitHub OTP (optional):'.bold }, function (err, data) {
        if (err) return callback(err)
        config.ghOtp = data
        callback()
      })
    })
  })
}

function auth (config, callback) {
  if (process.env.GH_USER && process.env.GH_TOKEN) {
      config.ghToken = process.env.GH_TOKEN
      config.ghUser = process.env.GH_USER
      return callback()
  }
  var configPath = path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'microjsauth.json')
    , authData
  mkdirp.sync(path.dirname(configPath))

  try {
    authData = require(configPath)
    if (authData.user && authData.token) {
      config.ghToken = authData.token
      config.ghUser = authData.user
      return callback()
    }
  } catch (e) {}

  prompt(config, function (err) {
    if (err)
      return callback(err)

    if (config.ghUser) {
      createAuth(config, function (err) {
        if (err)
          return callback(err)
        fs.writeFileSync(configPath, JSON.stringify({ user: config.ghUser, token: config.ghToken }), 'utf8')
        callback()
      })
    } else {
      console.log('skipped stats collection')
      console.log()
      callback()
    }
  })
}

module.exports = auth
