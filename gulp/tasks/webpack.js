(function () {

  'use strict';

  var gulp = require('gulp');
  var webpack = require('webpack');

  // Config will run from the root folder
  var webpackConfig = {
    entry: {
      app: ['./app/app.js']
    },
    output: {
      path: './dist',
      filename: 'bundle.js'
    }
  };

  // Create bundle file
  gulp.task('webpack', function(done) {
    webpack(webpackConfig).run(onBuild(done));
  });

  function onBuild(done) {
    return function(err, stats) {
      if (err) {
        console.log('Error', err);
      } else {
        console.log(stats.toString());
      }

      if (done) {
        done();
      }
    }
  }

})();
