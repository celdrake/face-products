(function () {

  'use strict';

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var concat  = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');

  var paths = require('../path-config');

  gulp.task('sass:compile', function () {
    gulp.src(paths.app.styles.sourceFiles)
      .pipe(sass())
      .pipe(gulp.dest(paths.app.styles.compiledFiles));
  });

  gulp.task('minify-css', function() {
    var options = {
      comments: true,
      spare: true
    };

    gulp.src(['./' + paths.app.styles.compiledFiles + '/*.css'])
      .pipe(minifyCSS(options))
      .pipe(concat('all-styles.css'))
      .pipe(gulp.dest('dist'))
  });

})();
