/**
 * AngularJS Rokk3r Labs Test
 * @author Harrisson Restrepo
 */

/**
 * Main AngularJS Web Application
 */
angular.module('usersEasyA+', [
    'ngRoute',
    'angular-svg-round-progressbar'
])
/**
 * Run app
 */
    .run(['$rootScope', '$location','$window',function($rootScope, $location, $window){
        $rootScope.$on('$locationChangeStart', function(){
            if ($window.sessionStorage.token) {
                $location.path();
            }else{
                $location.path('/home');
            }
        });
    }])

    /**
     * Configure the Routes
     */
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home',
                {
                    controller: 'loginController',
                    templateUrl: 'scripts/app/views/home.html',
                    controllerAs: 'vm'
                })
            .when('/profil',
                {
                    controller: '',
                    templateUrl: 'scripts/app/views/profil.html'
                })
            .when('/battle',
                {
                    controller: '',
                    templateUrl: 'scripts/app/views/battle.html'
                })
            .when('/ranking',
                {
                    controller: '',
                    templateUrl: 'scripts/app/views/ranking.html'
                })
            .when('/bootcamp',
                {
                    controller: '',
                    templateUrl: 'scripts/app/views/bootcamp.html'
                })
            .otherwise({ redirectTo: '/home' });
    }]);