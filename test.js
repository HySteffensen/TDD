var assert = require("chai").assert;

describe("Addition", function() {
    it("should add", function() {
        assert.equal(add(2,5), 7);
    });
});

function add(a, b) {
    return a + b;
} 