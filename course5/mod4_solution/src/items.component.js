(function () {
  'use strict';
  // binds  to items-list template
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/templates/items-list.template.html',
    bindings: {
      items: '<'
    }
  });
})();
