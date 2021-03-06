#!/usr/bin/env node
var sys = require('sys'), 
   http = require('http');
http.createServer(function (req, res) {
  var maxDelayMs = 10;
  var delay = Math.round(Math.random()*maxDelayMs);
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(delay+'\n');
    res.end();
  }, delay);
}).listen(9000);
sys.puts('Server running at http://127.0.0.1:9000/');
