'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var paths = require('../path-config');
var base = 'dist';

function syncBrowser() {
  browserSync({
    server: {
      baseDir: base
    },
    port: 9000,
    // Don't open a new browser tab
    open: false,
    files: [
      base + '/**'
    ]
  });
  addSyncWatchers();
}

function addSyncWatchers() {

  // JS Files : Lint JS files and recreate bundled JS
  gulp.watch(paths.app.jsFiles, ['lintJS:warn', 'webpack']);

  // HTML Files : Copy to dist folder
  gulp.watch(paths.app.htmlFiles, ['copy-html']);

  // SASS Files : Compile into CSS
  gulp.watch(paths.app.styles.sourceFiles, ['sass:compile']);

  // CSS Files : Recreate bundled CSS
  gulp.watch(paths.app.styles.compiledFiles + '/*.css', ['minify-css']);
}

gulp.task('sync', function () {
  syncBrowser();
});
