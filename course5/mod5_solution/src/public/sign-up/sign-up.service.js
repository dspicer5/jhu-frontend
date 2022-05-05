(function () {
    'use strict';

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['MenuService'];
    function SignUpService(MenuService) {
        var service = this;
        var userInfo = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            phoneNum: '',
            dishNum: ''
        };
        // setter for user info
        service.setSignUpData = function (data) {
            userInfo = data;

            MenuService.getDish(data.dishNum)
                .then(function (response) {
                        userInfo.dish = response.data;
                    }
                );
        }
        // getter for user info
        service.getSignUpData = function () {
            return userInfo;
        }
        // check email a key for user info
        service.registered = function () {
            return userInfo.email;
        }
        
    }
})();
