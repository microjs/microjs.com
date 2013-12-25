const hyperquest    = require('hyperquest')
    , bl            = require('bl')

const maxConcurrent = 25

var queue    = []
  , inFlight = 0

function go () {
  if (inFlight > maxConcurrent || !queue.length)
    return

  var req = queue.shift()
  inFlight++
  hyperquest(req.url, req.options).pipe(bl(function () {
    inFlight--
    process.nextTick(go)
    req.callback.apply(this, arguments)
  }))
  process.nextTick(go)
}

function fetch (url, options, callback) {
  if (typeof options == 'function') {
    callback = options
    options  = {}
  }

  queue.push({
      url      : url
    , options  : options
    , callback : callback
  })

  go()
}

module.exports = fetch