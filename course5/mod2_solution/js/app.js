(function () {
    'use strict';
    // ng-app
    angular.module('ShoppingListApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // controller 1 "" as TBC
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var TBC = this;
        // getter function for TB array
        TBC.array = ShoppingListCheckOffService.getTB();
        TBC.emptyArray = ShoppingListCheckOffService.emptyTB;
        TBC.moveItem = ShoppingListCheckOffService.moveItem;
    } // end controller

    // controller 2 "" as ABC
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ABC = this; 
        // getter function for AB array
        ABC.array = ShoppingListCheckOffService.getAB();
        ABC.emptyArray = ShoppingListCheckOffService.emptyAB;
    } // end controller

    // connecting service
    function ShoppingListCheckOffService() {
        var service = this;
        // define to buy "TB" array
        service.toBuy = [
            {name: "Milk", quantity: 2, price: 4},
            {name: "Donuts", quantity: 20, price: 3},
            { name: "Cookies",  quantity: 10, price: 1},
            { name: "Coke", quantity: 12, price: 1 },
            { name: "Chicken", quantity: 6, price: 2 },
            { name: "Fries", quantity: 3, price: 3 },
            { name: "Sushi", quantity: 2, price: 2 },
            { name: "Steak", quantity: 1, price: 20 },
            { name: "Pork", quantity: 1, price: 10 },
            { name: "Bacon",  quantity: 5, price: 3}
        ];
        // declare already bought "AB" array
        service.alreadyBought = [];
        // return array to ng-repeat
        service.getTB = function () {
            return service.toBuy;
        };
        // return true to ng-if
        service.emptyTB = function () {
            return service.toBuy.length == 0;
        };
        // JS splice from array and push to array function
        service.moveItem = function (index) {
            // splice item at index
            var item = service.toBuy.splice(index, 1)[0];
            // push to AB array
            service.alreadyBought.push(item);
            // console.log(service.toBuy)
            // console.log(service.alreadyBought)
        };
        // return array to ng-repeat
        service.getAB = function () {
            return service.alreadyBought;
        };
        // return true to ng-if
        service.emptyAB = function () {
            return service.alreadyBought.length == 0;
        };
    } // end service

})();
