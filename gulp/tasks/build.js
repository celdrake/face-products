(function () {

  'use strict';

  var gulp = require('gulp');
  var sequence = require('run-sequence');


  // Use sequence to ensure that main tasks are run after clean has finished
  gulp.task('default', function () {
    sequence('clean', ['sass:compile', 'webpack', 'assets', 'minify-css', 'connect', 'sync']);
  });

})();
