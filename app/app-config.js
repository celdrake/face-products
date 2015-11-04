(function () {


  'use strict';

  angular.module('faceProducts')
    .config(function($stateProvider, $urlRouterProvider) {

    // By default navigate to the "Products" page
    $urlRouterProvider.otherwise('/products');


    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'product/product.html',
        controller: 'ProductsCtrl as product'
      });
  });


})();
