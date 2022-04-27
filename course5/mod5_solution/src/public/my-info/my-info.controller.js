(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService'];
    function MyInfoController(SignUpService) {
        var $ctrl = this;
        var service = SignUpService;
        $ctrl.data = {};

        $ctrl.enrolled = function () {
            $ctrl.data = service.getSignUpData();
            return service.enrolled();
        }
    }
})();
