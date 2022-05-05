(function () {
    'use strict';

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['SignUpService'];
    function UserInfoController(SignUpService) {
        var $ctrl = this;
        var service = SignUpService;
        $ctrl.data = {};

        $ctrl.registered = function () {
            $ctrl.data = service.getSignUpData();
            return service.registered();
        }
    }
})();
