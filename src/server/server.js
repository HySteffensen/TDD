"use strict";

var http = require("http");

var server;

exports.start = function() {
    server = http.createServer();

    server.on("request", function(req, res) {
        res.end();
    });

    server.listen(8080);
    console.log("server started");
};

exports.stop = function(callback) {
    server.close(callback);
    console.log("server stopped");
};