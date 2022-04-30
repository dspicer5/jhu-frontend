(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$timeout', '$scope', 'MenuService', 'SignUpService'];
    function SignUpController($timeout, $scope, MenuService, SignUpService) {
        var $ctrl = this;
        var service = SignUpService;
        $ctrl.data = {};
        $ctrl.verified = false;

        $ctrl.signUp = function () {
            $ctrl.data.firstName = $ctrl.capitalizeFirst($ctrl.data.firstName);
            $ctrl.data.lastName = $ctrl.capitalizeFirst($ctrl.data.lastName);
            $ctrl.data.email = $ctrl.lowerCase($ctrl.data.email);
            $ctrl.data.phoneNum = $ctrl.seperate($ctrl.data.phone);
            $ctrl.data.favoriteDish = $ctrl.upperCase($ctrl.data.favoriteDish);
            $ctrl.checkData();
        }

        $ctrl.checkData = function () {
            $ctrl.verified = false;
            $ctrl.enrolled = true;
            var dish = $ctrl.data.favoriteDish;

            if (!dish) {
                service.setSignUpData($ctrl.data);
                $ctrl.data = {};
                $ctrl.data.message = 'Your information has been saved.';
                $ctrl.verified = true;
                $scope.signupForm.$setPristine();
                return;
            }

            MenuService.checkDish(dish).then(function (valid) {
                if (valid) {
                    $timeout(function () {
                        service.setSignUpData($ctrl.data);
                        $ctrl.data = {};
                        $ctrl.data.message = 'Your information has been saved.';
                        $ctrl.verified = true;
                        $scope.signupForm.$setPristine();
                    });
                }
                else {
                    $ctrl.data.message = "No such menu number exists.";
                    $ctrl.enrolled = false;
                    $ctrl.verified = true;
                }
            })
        }
        /*
        $scope.$watch('ctrl.data.favoriteDish', function () {
            if ($scope.ctrl.data.favoriteDish) {
                $scope.ctrl.data.favoriteDish = $scope.ctrl.data.favoriteDish.toUpperCase();

            }
        });
        */
        $ctrl.lowerCase = function (data) {
                var lower = data.toLowerCase();
                return lower;
        }
        $ctrl.upperCase = function (data) {
            if (typeof $ctrl.data.favoriteDish == 'undefined') {
                var upper = data;
            }
            else {
                var upper = data.toUpperCase();
            }
            return upper;
        }
        $ctrl.capitalizeFirst = function (data) {
            var cap = data.toLowerCase();
            cap = cap.substring(0, 1).toUpperCase() + cap.substring(1);
            return cap;
        }
        $ctrl.seperate = function (data) {
            var area = data.substring(0, 3);
            var mid = data.substring(3, 6);
            var end = data.substring(6, 10);
            var seperated = area + "-" + mid + "-" + end;
            return seperated;
        }
    }
})();
