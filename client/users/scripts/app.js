/**
 * AngularJS Rokk3r Labs Test
 * @author Harrisson Restrepo
 */
/**
 * Main AngularJS Web Application
 */
angular.module('usersEasyA+', [
        'ngRoute',
        'angular-svg-round-progressbar',
        'angularModalService',
        'ui.sortable',
        'ui.bootstrap',
        'ngAnimate',
        'ngFileUpload',
        'ngMaterial',
        'timer',
        'angularMoment',
        'infinite-scroll',
        'angular.filter',
        'cfp.hotkeys',
        'ngCookies',
        'base64',
        'lbServices'
    ])
    /**
     * Run app
     */
    .run(['$rootScope','$location', function($rootScope, $location) {
        $rootScope.$on('$locationChangeStart', function(event, toState, toParams) {
            var key = '$LoopBack$currentUserId';

            if( (typeof localStorage[key] === 'undefined' || localStorage[key] == '') && sessionStorage[key] == '')  {
                // event.preventDefault();
                $location.path('/front');
            }
        });
    }])
/**
 * Configure the Routes
 */
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/profil', {
            controller: '',
            templateUrl: 'scripts/app/views/profil.html'
        })
        .when('/battle', {
            controller: '',
            templateUrl: 'scripts/app/views/battle.html'
        })
        .when('/single/:type', {
            controller: '',
            templateUrl: 'scripts/app/views/battle.html'
        })
        .when('/ranking', {
            controller: '',
            templateUrl: 'scripts/app/views/ranking.html'
        })
        .when('/bootcamp', {
            controller: '',
            templateUrl: 'scripts/app/views/bootcamp.html'
        })
        .when('/bootcamp-sedine', {
            controller: '',
            templateUrl: 'scripts/app/views/bootcamp-seforkerte.html'
        })
        .when('/bootcamp-explain', {
            controller: '',
            templateUrl: 'scripts/app/views/bootcamp-explain.html'
        })
        .when('/opponent', {
            controller: '',
            templateUrl: 'scripts/app/views/opponent.html'
        })
        .when('/battle-step', {
            controller: '',
            templateUrl: 'scripts/app/views/battle-step.html'
        })
        .when('/battle-result', {
            controller: '',
            templateUrl: 'scripts/app/views/battle-result.html'
        })
        .when('/single-player', {
            controller: '',
            templateUrl: 'scripts/app/views/single-player.html'
        })
        .when('/single-player-bootcamp', {
            controller: '',
            templateUrl: 'scripts/app/views/single-player-bootcamp.html'
        })
        .when('/front', {
            controller: '',
            templateUrl: 'scripts/app/views/front.html'
        })
        .when('/resetpassword', {
            controller: 'passwordResetCtrl',
            templateUrl: 'scripts/app/views/reset_password.html',
            isActive: false
        })
        .otherwise({ redirectTo: '/front' });


}])


/**
     * Run app
     */
    .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
        // $rootScope.$on('$locationChangeStart', function() {
        //     if ($window.sessionStorage.token) {
        //         $location.path();
        //     } else {
        //         $location.path('/front');
        //     }
        // });
    }])
    .config(['LoopBackResourceProvider', function(LoopBackResourceProvider) {
        LoopBackResourceProvider.setAuthHeader('X-Access-Token');
        LoopBackResourceProvider.setUrlBase('http://api.easyae.dk/api')
        // LoopBackResourceProvider.setUrlBase('http://edootech-api.wd-agency.com/api')
        
    }])
    .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if(rejection.status === 401) {
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/front');
          }
          return $q.reject(rejection);
        }
      };
    });
  }])

//Develop Endpoints
//.value('APIBase', "http://edootech-api.wd-agency.com/api")
//.value('socketPort', "http://wd-agency.com:6565");

//Production Endpoints
 .value('APIBase', "http://api.easyae.dk/api")
 .value('socketPort', "http://api.easyae.dk:6565");



(function() {
    angular.module('usersEasyA+')
        .controller('headerController', headerController);
    headerController.$inject = ['$location'];
    function headerController($location) {
        var vm = this;
        vm.isActive = function(path) {
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        }
    }
})();
(function() {
    angular.module('usersEasyA+')
        .factory('AuthService', function($http, $window) {
            var auth = {
                isAuthenticated: false
            };
            return {
                signIn: function(username, password) {
                    //FE
                    $window.sessionStorage.setItem('token', 'xseix');
                    return true;
                    //BE
                    //return $http.post('/user/signin', {username: username, password: password});
                },
                logOut: function() {
                    //FE
                    $window.sessionStorage.removeItem('token');
                    return false;
                    //BE
                    //return $http.get('/user/logout');
                }
            };
        });
})();
(function() {
    angular.module('usersEasyA+')
        .service('UserService', function($http) {
            return {
                getUserData: function(id) {
                    //FE
                    return {
                        name: 'Martina H.',
                        fullname: 'Martina Larsen',
                        username: 'Martina3030',
                        avatar: 'https://placeholdit.imgix.net/~text?txtsize=11&txt=117%C3%97117&w=117&h=117',
                        school: 'Øregård Gymnasium (STX)',
                        rol: 'Student',
                        slogan: '"I`m gonna kick butt!"',
                        city: 'Sjaelland',
                        totalPoints: {
                            day: '2600',
                            month: '8100'
                        },
                        totalBattles: {
                            total: 64,
                            details: [{
                                title: 'Won',
                                value: 22,
                                color: '#83bc5c',
                                percent: 22
                            }, {
                                title: 'Lost',
                                value: 10,
                                color: '#d43e4c',
                                percent: 10
                            }, {
                                title: 'Tied',
                                value: 32,
                                color: '#58cce9',
                                percent: 32
                            }]
                        },
                        rankings: [{
                            title: 'High School',
                            color: 'danger',
                            rank: '62nd',
                            percent: '62'
                        }, {
                            title: 'Regional',
                            color: 'success',
                            rank: '62nd',
                            percent: '62'
                        }, {
                            title: 'National',
                            color: 'info',
                            rank: '62nd',
                            percent: '62'
                        }]
                    };
                    //BE
                }
            };
        });
})();
(function() {
    angular.module('usersEasyA+')
        .directive('sectionStars', sectionStarts);
    function sectionStarts() {
        return {
            restrict: 'E',
            templateUrl: './scripts/app/views/templates/section-stars.html',
            scope: {
                value: '@'
            }
        }
    }
})();
