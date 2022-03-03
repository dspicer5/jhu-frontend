(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.testMeal = function () {
            // split csv input to array
            var numMeals = $scope.foodText.split(",").length;
            // boolean meals <= 3 good
            if (numMeals <= 2) {
                var message = "Enjoy";
            }
            else {
                var message = "Too Much";
            };
            
            $scope.mealPlan = message + " test";
        };//end testMeal func

        // reset function
        $scope.clearText = function () {
            $scope.mealPlan = " ",
            $scope.foodText = "";
        }//end clearText function
    }//end Controller
})();//end IIFE