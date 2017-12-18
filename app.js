'use strict';

const http = require('http');

console.log(process.version);

let server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('Hello World');
});
server.listen(3000);
