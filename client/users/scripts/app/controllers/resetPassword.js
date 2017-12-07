(function() {
        angular.module('usersEasyA+')
            .controller('passwordResetCtrl', passwordResetCtrl);

        function passwordResetCtrl($scope, $routeParams, userApi) {
            // $scope.uid = $routeParams.uid;
            // $scope.token = $routeParams.access_token;
            // localStorage.setItem('san', $scope.uid);
            // localStorage.setItem('man', $scope.token);
            // console.log('uid', $scope.uid);
            // console.log('token', $scope.token);
            $scope.resetpw = function() {
                // var forgotUserDetail = {
                //     id:$scope.uid,
                //     password:$scope.password,
                //     newPassword:$scope.newPassword,
                //     confirmation:$scope.confirmation
                // };
                // userApi.resetPassword(forgotUserDetail).then(function(success) {
                // }, function(error) {
                //     console.log(error);
                // });
                console.log($scope.oldpassword, $scope.newPassword, $scope.confirmation, localStorage.getItem('userId'));
                        var user_data = JSON.stringify({ "password": $scope.oldpassword, "newPassword": $scope.newPassword, "confirmation": $scope.confirmation, "id": localStorage.getItem('userId') });
                        var user = { user: user_data };
                        userApi.resetPassword(user).then(function(success) {
                            console.log(success);
                            $scope.errPwdMatch = success.data;
                            if ($scope.errPwdMatch == 'Passwords do not match') {
                                console.log('not match');
                            } else {
                                console.log('match');
                            }

                        }, function(error) {
                            console.log(error);
                        });

            }
        }


})();
