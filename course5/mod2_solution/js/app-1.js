(function () {
    'use strict';
     
    var toBuy = [
      {name: "Milk", quantity: 2, pricePerItem: 4},
      {name: "Donuts", quantity: 200, pricePerItem: 3},
      { name: "Cookies",  quantity: 100, pricePerItem: 1},
      { name: "Chocolate",  quantity: 5, pricePerItem: 2}
    ];

    var alreadyBought = [];
    
    angular.module('ShoppingListApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    
    
    // To buy controller 
    ToBuyController.$inject = ['$scope'];
    function ToBuyController($scope) {
        $scope.toBuy = toBuy;
        $scope.numItem = toBuy.quantity;

        // hide when empty
        var emptyArray = false;
        if (toBuy.length < 1) {
            emptyArray = true;
        };

    }

    // already bought controller 
    AlreadyBoughtController.$inject = ['$scope'];
    function AlreadyBoughtController($scope) {
        $scope.alreadyBought = alreadyBought;
        

        // hide when array is empty
        var emptyArray = false;
        if (alreadyBought.length === 0) {
            emptyArray = true;
            console.log(emptyArray)
        };

    }

    // service
    function ShoppingListCheckOffService() {
        

    }





    /*
    function ToBuyController($scope) {
        $scope.toBy = toBuy;
    
        $scope.addToList = function () {
            var newItem = {
            name: $scope.newItemName,
            quantity: $scope.newItemQuantity
            }; // end new Item
        
            $scope.toBuy.push(newItem);
            
    }; // end add function
    } // end ToBuyController function
    */
})();
    