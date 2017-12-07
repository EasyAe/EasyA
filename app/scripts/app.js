'use strict';

/**
 * @ngdoc overview
 * @name edootechMaster8569ac44917a910d33b9d865311a567c72be6ef7App
 * @description
 * # edootechMaster8569ac44917a910d33b9d865311a567c72be6ef7App
 *
 * Main module of the application.
 */
angular
  .module('edootechMaster8569ac44917a910d33b9d865311a567c72be6ef7App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
