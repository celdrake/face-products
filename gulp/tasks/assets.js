(function () {

  'use strict';

  var gulp = require('gulp');

  gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower/**')
      .pipe(gulp.dest('dist/bower'));
  });

  gulp.task('copy-html', function () {
    gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist/'));
  });

  gulp.task('assets',
    ['copy-html', 'copy-bower-components']);

})();
