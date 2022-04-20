(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);
// url based params 
ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var item_ctrl = this;
  item_ctrl.menu_items = items.data.menu_items;
  item_ctrl.name = items.data.category.name;
  };
})();
