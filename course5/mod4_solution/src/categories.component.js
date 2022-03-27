(function () {
  'use strict';
  // display menu categories 
  angular.module('MenuApp')
  .component('categories', {
      templateUrl: 'src/templates/categories-list.template.html',
      bindings: {
        items: '<'
      }
  });
})();
