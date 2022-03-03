(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        // meal fuction
        $scope.testMeal = function () {
            // assain varriable
            var strMeals = $scope.foodText;  //.replace(" ", "").split(",").length;
            var numMeals = 0;
            var message = "";
            var msg = document.getElementById("msg");
            var box = document.getElementById("box");
            // boolean check if no input
            if(typeof strMeals === 'undefined'  || $scope.foodText == ""  )  {
                message = "Please enter data first"
                msg.style.color = 'red';
                box.style.borderColor = 'red';
            }
            else{
                strMeals = strMeals.replace(/\s/g, '').replace(/,{2,}/g, '').replace(/,$/, '').replace(/^,/, '');
                numMeals = strMeals.split(",").length;
                msg.style.color = 'green';
                // boolean meals <= 3 good
                if (numMeals <= 3) {
                    message = "Enjoy!";
                }
                else {
                    message = "Too much!";
                };  
                box.style.borderColor = 'green';
            }//end outer if/else
            $scope.mealPlan = message;
        };//end testMeal func

        // reset function
        $scope.clearText = function () {
            $scope.mealPlan = "";
            $scope.foodText = "";
            box.style.borderColor = 'gray';
        }//end clearText function
    }//end Controller
})();//end IIFE