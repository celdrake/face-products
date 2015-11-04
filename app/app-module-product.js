(function () {


  'use strict';

  // Configure controllers
  var ProductCtrl = require('./product/js/products-controller');
  angular.module('faceProducts')
    .controller('ProductsCtrl', ProductCtrl);

})();
