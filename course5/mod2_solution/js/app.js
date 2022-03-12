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
        service.arrayTB = [
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
        service.arrayAB = [];
        // return array to ng-repeat
        service.getTB = function () {
            return service.arrayTB;
        };
        // return true to ng-if
        service.emptyTB = function () {
            return service.arrayTB.length < 1;
        };
        // JS splice from array and push to array function
        service.moveItem = function (index) {
            // splice item at index
            var item = service.arrayTB.splice(index, 1)[0];
            // calculate total price
            // item.price = item.quantity * item.price  // place holder
            // push to AB array
            service.arrayAB.push(item);
            // console.log(service.arrayTB) // testing 
            // console.log(service.arrayAB) // testing
        };
        // return array to ng-repeat
        service.getAB = function () {
            return service.arrayAB;
        };
        // return true to ng-if
        service.emptyAB = function () {
            return service.arrayAB.length < 1;
        };
    } // end service
})();
