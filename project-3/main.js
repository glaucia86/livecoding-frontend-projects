var fs = require('fs')
fs.appendFile('log.txt', 'new data', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})