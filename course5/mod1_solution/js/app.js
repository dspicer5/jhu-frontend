(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.testMeal = function () {
            // assain varriable
            var numMeals = $scope.foodText;  //.replace(" ", "").split(",").length;
            numMeals = numMeals.replace(/\s/g, '').replace(/,{2,}/g, '').replace(/,$/, '').replace(/^,/, '');
            // console.log(numMeals)   // test REGEX
            numMeals = numMeals.split(",").length;
            // console.log(numMeals) // test count

            // boolean meals <= 3 good
            if (numMeals <= 2) {
                var message = "Enjoy!";
            }
            else {
                var message = "Too much!";
            };
            // set scope to inject
            $scope.mealPlan = message;
        };//end testMeal func

        // reset function
        $scope.clearText = function () {
            $scope.mealPlan = " ",
            $scope.foodText = "";
        }//end clearText function
    }//end Controller
})();//end IIFE