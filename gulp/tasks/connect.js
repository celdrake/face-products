(function () {

  'use strict';

  var gulp    = require('gulp');
  var connect = require('gulp-connect');

  gulp.task('connect', function () {
    connect.server({
      root: 'dist/',
      port: 9000
    });
  });

})();
