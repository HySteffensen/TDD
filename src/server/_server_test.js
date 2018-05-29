var assert = require("chai").assert;
var server = require("./server");

describe("Addition", function() {
    it("should equal", function() {
        assert.equal(server.number(), 3);
    });
});