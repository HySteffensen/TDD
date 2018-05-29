/* globals jake:false, desc:false, task:false, complete:false, fail:false, directory:false */

"use strict";

var jshint = require("simplebuild-jshint");

desc("Default Task");
task("default", [ "lint", "test" ], function() {
    console.log("\n\nBUILD OK");
});

desc("Lint JavaScript Code");
task("lint", function() {
    process.stdout.write("Linting JavaScript: ");

    jshint.checkFiles({
        files: [ "Jakefile.js", "src/javascript/**/*.js" ],
        options: lintOptions(),
        globals: lintGlobals()
    }, complete, fail);
}, { async: true });

desc("Testing");
task("test", [], function() {
    console.log("Testing Javascript");
});

function lintOptions() {
    return {
        bitwise: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        futurehostile: true,
        latedef: "nofunc",
        noarg: true,
        nocomma: true,
        nonbsp: true,
        nonew: true,
        strict: true,
        undef: true,

        node: true,
        browser: true
    };
}

function lintGlobals() {
    return {
        // Mocha
        describe: false,
        it: false,
        before: false,
        after: false,
        beforeEach: false,
        afterEach: false
    };
}
