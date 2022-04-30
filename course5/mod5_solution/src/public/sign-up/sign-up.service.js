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
            favoriteDish: ''
        };
        service.setSignUpData = function (data) {
            userInfo = data;

            MenuService.getDish(data.favoriteDish)
                .then(function (response) {
                        userInfo.dish = response.data;
                    }
                );
        }
        service.getSignUpData = function () {
            return userInfo;
        }
        //unique value
        service.enrolled = function () {
            return userInfo.email;
        }
    }
})();
