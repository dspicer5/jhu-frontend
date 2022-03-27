(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('MENU_PATH', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http','MENU_PATH' ]
  function MenuDataService($http, MENU_PATH) {
    var service = this;
    var category = MENU_PATH + "/categories.json";
    var items = MENU_PATH + "/menu_items.json";
    
    service.getAllCategories = function (){
      var response =  $http({
        method: "GET",
        url: category
      })
      return response;
    } // end MenuDataService
    
    service.getItemsForCategory = function(shortName) {
      // console.info('service.getItemsForCategory.categoryShortName:', categoryShortName);
      return $http({
        method: "GET",
        url: items,
        params: {
          category: shortName
        }
        });
      }; // end getItemsForeCategory
  } // end MenuService
})();
