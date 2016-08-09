// Finally, in the app.js
//
// set up a server,
// write a 200 head, and
// use res.write to send a message that concatenates the results from
// the third module, but formatted to provide the user with a dollar
// amount (see Success below for an example of what this will look
//   like).
//
// In the end, your terminal should produce the below result when you
// curl localhost:3000.
//
// Account balance:
// $156,301
var http = require('http');
var results = require("./module3.js");
http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(results.account() + " $" + results.ranNumber() + "\n");
    res.end();
}).listen(3000);
console.log("I'm Running Fool!");
