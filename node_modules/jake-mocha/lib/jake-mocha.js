/*
 * Copyright (c) 2013 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

var mocha = require('./mocha-glob');

/**
 * Defines a mocha task with the given options.
 *
 * @param {{name: String, files}} options
 */
exports.defineTask = function defineTask(options) {
  var name = options.name || 'mocha';
  var description = options.desc || 'Run Mocha tests';
  var prerequisites = options.prerequisites || [];

  desc(description);
  var t = task(name, prerequisites, { async: true }, function () {
    mocha.run(
        t.files,
        t.mochaOptions,
        function (err) {
          err ? fail(err) : complete();
        }
    );
  });

  t.files = options.files;
  t.mochaOptions = options.mochaOptions;

};
