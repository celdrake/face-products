'use strict';

var paths = {

  app: {
    entryFile: 'app/app.js',
    jsFiles: ['app/**/*.js', '!app/bower/**/*.js'],
    styles: {
      sourceFiles: 'app/styles/sass/*.scss',
      compiledFiles: 'app/styles/css'
    },
    htmlFiles: 'app/**/*.html'
  },

  build: {
    dir: 'dist'
  }
};

module.exports = paths;
