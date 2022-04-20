(function () {
'use strict';

  // copied from Lecture 37 material
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
      
    // categories state  
    .state('categories', {
      url: '/categories-list',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesController',
      controllerAs: 'categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    }) // end state
      
    // menu items state
    .state('categories.menu_items', {
      url: '/menu-items/{short_name}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController',
      controllerAs: 'items',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
               //  console.log($stateParams.short_name);
                return MenuDataService.getItemsForCategory($stateParams.short_name);
        }]
      }
    });
  } //  end state
})();
