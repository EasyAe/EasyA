(function() {

    angular.module('usersEasyA+')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'userApi'];

    function loginController($location, userApi) {
        var vm = this;

        vm.loginUser = function(user) { //User login function
            console.log(user);
            var promise = userApi.logUser(user);

            promise.then(function(Login) {
                console.log(Login);
                $location.path('/battle');
                angular.element(".modal-backdrop").hide();
                angular.element("body").attr("class","modal-close");
            }, function(errorLogin) {
                console.log(errorLogin);
            });
        };

        // vm.logout = function () {
        //   AuthService.logOut();
        // }

    }

})();
