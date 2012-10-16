var read = require('read')
  , colors = require('colors')

  , auth = function (config, callback) {
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
          callback()
        })
      })
    }

module.exports = auth  