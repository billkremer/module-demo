var http = require('http');  // http is a builtin module for node.js
var modThree = require('./moduleThree');  // brings in node modules

  http.createServer(function ( req, res) {
      res.writeHead(200);  // 200 =ok response code 418 = im a teapot
      res.write(modThree.secondFunction());
        console.log(modThree.secondFunction()); // prints to bash
      res.write(modThree.firstFunction());      
        console.log(modThree.firstFunction()); // prints to bash
      res.end();  // ok to send response

  }).listen(3000);  // listening on port 3000
