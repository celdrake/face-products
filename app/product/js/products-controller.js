(function () {


  'use strict';


  function ProductsCtrl() {
    // Self reference to be able to use "controller as"
    var product = this;

    product.products = ['First', 'Second', 'AAA'];
    product.greeting = 'HELLO from ProductsCtrl';
  }


  module.exports = ProductsCtrl;

})();
