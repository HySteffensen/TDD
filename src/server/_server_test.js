"use strict";

var assert = require("chai").assert;
var server = require("./server");
var http = require("http");


describe("Server", function() {

    before(function() {
        server.start();
    });

    after(function() {
        server.stop(function() {
            console.log("stop callback");
        });
    });

    it("should get a 200 response", function() {
        http.get("http://localhost:8080", function(res) {
            // res.on("data", function(){});
            assert.equal(res.statusCode, 200);
        });
    });
});