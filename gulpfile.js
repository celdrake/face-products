(function () {

  'use strict';

  // Loads recursively all gulp tasks defined in the separate modules
  var requireDir = require('require-dir');
  requireDir('./gulp/tasks', { recurse: true });

})();
