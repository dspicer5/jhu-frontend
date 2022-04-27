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
                $scope.signupForm.$setPristine();
                $ctrl.verified = true;

                return;
            }

            MenuService.checkDish(dish).then(function (valid) {
                if (valid) {
                    $timeout(function () {
                        service.setSignUpData($ctrl.data);
                        $ctrl.data = {};
                        $ctrl.data.message = 'Your information has been saved.';
                        $scope.signupForm.$setPristine();
                        $ctrl.verified = true;
                    });
                }
                else {
                    $ctrl.data.message = "No such menu number exists.";
                    $ctrl.enrolled = false;
                    $ctrl.verified = true;
                }
            })
        }

        $scope.$watch('ctrl.data.email', function () {
            if ($scope.ctrl.data.email) {
                $scope.ctrl.data.email = $scope.ctrl.data.email.toLowerCase();
            }
        });

        $scope.$watch('ctrl.data.favoriteDish', function () {
            if ($scope.ctrl.data.favoriteDish) {
                $scope.ctrl.data.favoriteDish = $scope.ctrl.data.favoriteDish.toUpperCase();
            }
        });
    }
})();
