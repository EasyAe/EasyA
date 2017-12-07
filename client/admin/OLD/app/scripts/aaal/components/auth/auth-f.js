/**
 * @ngdoc service
 * @name aaal.Auth
 * @description
 * # Auth
 * Factory in the aaal.
 */
(function() {
    'use strict';

    angular
        .module('aaal')
        .factory('Auth', function(Users, $rootScope, $state, $localStorage) {

            function login(email, password) {
                return Users
                    .login({
                        rememberMe: true
                    }, {
                        email: email, password: password
                    })
                    .$promise
                    .then(function(response) {
                        $rootScope.currentUser = $localStorage.currentUser = {
                            id: response.user.id,
                            tokenId: response.id,
                            email: email
                        };

                        if ($state.nextAfterLogin) {
                            $state.go($state.nextAfterLogin.name, $state.nextAfterLoginParams);
                            $state.nextAfterLogin = null;
                        } else {
                            $state.go('private.dashboard');
                        }
                    });
            }

            function logout() {
                return Users
                    .logout()
                    .$promise
                    .then(function() {
                        $rootScope.currentUser = $localStorage.currentUser = null;
                        $state.go('login');
                    });
            }

            function register(email, password) {
                return Users
                    .create({
                        email: email,
                        password: password
                    })
                    .$promise;
            }

            return {
                login: login,
                logout: logout,
                register: register
            };
        });
})();
