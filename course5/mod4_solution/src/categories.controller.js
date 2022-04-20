(function () {
'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
    
    //console.log(items.data);
    var cats_ctrl = this;
    cats_ctrl.items = items.data;
  }
})();
