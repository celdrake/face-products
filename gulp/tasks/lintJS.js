(function () {
  'use strict';

  var gulp    = require('gulp');
  var jshint  = require('gulp-jshint');
  var jscs    = require('gulp-jscs');

  var stylish = require('jshint-stylish');

  var paths   = require('../path-config');

  var handlers = {
    error: function (error) {
      console.log('lintJS:', error.message);
      process.exit(1);
    }
  };

  gulp.task('lintJS:warn', function () {
    return gulp
      .src(paths.app.jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jscs());
  });

  gulp.task('lintJS:error', function () {
    return gulp
      .src(paths.app.jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jscs())
      .on('error', handlers.error);
  });

})();
