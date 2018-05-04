const request = require('request')

const maxConcurrent = 25

var queue    = []
  , inFlight = 0

function go () {
  if (inFlight > maxConcurrent || !queue.length)
    return

  var req = queue.shift()
  req.options.url = req.url
  inFlight++
  request.get(req.options, function(err, response, body) {
    inFlight--
    if(!err && response.statusCode !== 200){
      console.log(req.options);
      err = "Error code " + response.statusCode + ": " + response.statusMessage;
    }
    process.nextTick(go)
    req.callback.call(this, err, body)
  })
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