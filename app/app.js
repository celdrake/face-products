(function () {


  'use strict';

  // Define the app and its dependencies
  var faceProductsApp = angular.module('faceProducts', ['ui.router']);

  // Require the modules that will configure the application
  require('./app-config');
  require('./app-module-product');

})();
