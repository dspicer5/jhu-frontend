(function () {
    'use strict';
    // begin module
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems',FoundItems);
    
    // controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var NDC = this;
        NDC.found = [];  
        // function search for items and return found[]
        NDC.Menu = function () {
            // null search
            if((NDC.searchTerm == undefined) ||(NDC.searchTerm == '')){
                NDC.message = "Nothing found";
                NDC.found = []; // empty array
            } 
            else {
                var promise = MenuSearchService.getMenuItems(NDC.searchTerm);
                promise.then(function(response){
                    NDC.found = response;
                    if(NDC.found.length < 1){
                        NDC.message = "Nothing found";
                    } // end if
                    else {
                        NDC.message = "";
                    } // end else
                }) // end fucntion
            }; // end else     
        } // end menu function
        // function remove item from found[] 
        NDC.removeItem = function(itemIndex){
            NDC.found.splice(itemIndex, 1);
            if(NDC.found.length < 1){
                NDC.message = "No more matching items";
            } 
        } // end splice
    }// end function

    // http service and search function
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.getMenuItems = function(searchTerm){
            var found = [];
            return $http({
                method: "GET",
                // url designated in assignment
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            })
            .then(function (result) {
                for(var i=0; i<result.data.menu_items.length; i++){
                    var description = result.data.menu_items[i].description;
                    // push mathed items to found
                    if (description.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1) {
                        found.push(result.data.menu_items[i]);	
                    } // end if 
                } // end for loop
               return found;
            }); // end function
        } // end fuction / service
    } // end function / http service
    // controller funciton for directive
    function NarrowItDownDirectiveController() {
    }
    // directive from lesson 30
    function FoundItems() {
        // define ddo
        var ddo={
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    } // end function  
}());