(function () {
    'use strict';

    angular.module('public')
        .service('SignUpService', SignUpService);

    SignUpService.$inject = ['MenuService'];
    function SignUpService(MenuService) {
        var service = this;
        var UserInfo = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favoriteDish: ''
    
        };

        service.setSignUpData = function (data) {
            UserInfo = data;

            MenuService.getDish(data.favoriteDish)
                .then(function (response) {
                        UserInfo.dish = response.data;
                    }
                );
        }

        service.getSignUpData = function () {
            return UserInfo;
        }
        //unique value
        service.enrolled = function () {
            return UserInfo.email;
        }
    }
})();
