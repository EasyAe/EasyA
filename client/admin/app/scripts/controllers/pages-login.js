'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
  .controller('LoginCtrl', function ($scope, $state, $location, toastr, Users) {
    var self = this;

    if(Users.isAuthenticated()) {
      $state.go('app.dashboard');
    }

    self.rememberMe = false;
    self.signUp = function() {
      if(Users.isAuthenticated()) {
        $state.go('app.dashboard');
      } else {
        Users.login({
          email: self.email,
          password: self.password,
          rememberMe: self.rememberMe
        }, function() {
          var user = Users.getCurrent(function() {
            var userDetails = Users.userDetails({id: user.id}, function() {
              $scope.main.user = userDetails;
            });
          });

          if($location.nextAfterLogin !== '/core/login') {
            var next = $location.nextAfterLogin || '/app/dashboard';
            console.log(next);
            $location.nextAfterLogin = null;
            $location.path(next);
          } else {
            $state.go('app.dashboard');
          }
        }, function (error) {
          toastr['warning'](error.data.error.message);
          console.log(error);
        });
      }
    };
  });
