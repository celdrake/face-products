(function () {

  'use strict';

  var gulp    = require('gulp');
  var del     = require('del');

  var paths = require('../path-config');

  var distFiles = paths.build.dir + '/*';

  gulp.task('clean', function (cb) {
    return del([distFiles], cb);
  });

})();
