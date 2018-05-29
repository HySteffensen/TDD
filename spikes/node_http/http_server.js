"use strict";

var http = require("http");

const port = 8080;
const server = http.createServer();

server.listen(port);
console.log("Server listening on port " + port);

server.on('request', function(req, res) {
    console.log("Received request");

    var body = "<html><head><title>Node HTTP Spike</title><head>" +
        "<body><p>This is a spike of Node's HTTP server.</p></body></html>";

    res.write(body);
    res.end();
});
