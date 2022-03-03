(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.testMeal = function () {
            // split csv input to array
            var meals = $scope.foodText.split(",").length;
            

            $scope.mealPlan = meals + " test";
        };//end testMeal
    }//end Controller
})();//end IIFE