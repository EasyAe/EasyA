'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
app
  .controller('MainCtrl', function ($scope, $http, $translate, $state, Users) {

    $scope.main = {
      title: 'Edootech',
      settings: {
        navbarHeaderColor: 'scheme-light',
        sidebarColor: 'scheme-black',
        brandingColor: 'scheme-light',
        activeColor: 'default-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false
      },
      user: ''
    };

    var user = Users.getCurrent(function() {
      var userDetails = Users.userDetails({id: user.id}, function() {
        $scope.main.user = userDetails;
      });
    });

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
      $scope.currentLanguage = langKey;
    };
    $scope.currentLanguage = $translate.proposedLanguage() || $translate.use();

    $scope.logOut = function() {
      Users.logout(function() {
        $state.go('core.login');
      }, function(error) {
        console.log(error);
      });
    };
  });
