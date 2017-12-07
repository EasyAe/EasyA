'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */

  /*jshint -W079 */

var app = angular
  .module('minovateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'picardy.fontawesome',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'angular-loading-bar',
    'angular-momentjs',
    'FBAngular',
    'lazyModel',
    'toastr',
    'angularBootstrapNavTree',
    'oc.lazyLoad',
    'ui.select',
    'ui.tree',
    'textAngular',
    'colorpicker.module',
    'angularFileUpload',
    'ngImgCrop',
    'datatables',
    'datatables.bootstrap',
    'datatables.colreorder',
    'datatables.colvis',
    'datatables.tabletools',
    'datatables.scroller',
    'datatables.columnfilter',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ngTable',
    'smart-table',
    'angular-flot',
    'angular-rickshaw',
    'easypiechart',
    'uiGmapgoogle-maps',
    'ui.calendar',
    'ngTagsInput',
    'pascalprecht.translate',
    'ngMaterial',
    'localytics.directives',
    'leaflet-directive',
    'wu.masonry',
    'ipsum',
    'angular-intro',
    'dragularModule',
    'lbServices',
    'ngFileUpload'
  ])
  .constant('_', window._)
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      var key = '$LoopBack$currentUserId';

      if( requireLogin && ((typeof localStorage[key] === 'undefined' || localStorage[key] == '') && sessionStorage[key] == '') ) {
        event.preventDefault();
        $state.go('core.login');
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      event.targetScope.$watch('$viewContentLoaded', function () {

        angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility','visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;
    });
  }])

  .config(['LoopBackResourceProvider', function(LoopBackResourceProvider) {
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    LoopBackResourceProvider.setUrlBase('http://api.easyae.dk/api')
  }])
  // Live API URL : http://api.easyae.dk/api
   .value('apiUrl', "http://api.easyae.dk/api")
   .value('socketPort', "http://api.easyae.dk/api")

  // Development URL : http://edootech-api.wd-agency.com/api
  // .value('apiUrl', "http://edootech-api.wd-agency.com/api")
  // .value('socketPort', "http://edootech-api.wd-agency.com/api")

  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if(rejection.status === 401) {
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/core/login');
          }
          return $q.reject(rejection);
        }
      };
    });
  }])

  .config(['uiSelectConfig', function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  }])

  //angular-language
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/app/dashboard');

    $stateProvider

    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'views/tmpl/app.html'
    })
    //dashboard
    .state('app.dashboard', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'views/tmpl/dashboard.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/flot/jquery.flot.resize.js',
            'scripts/vendor/flot/jquery.flot.orderBars.js',
            'scripts/vendor/flot/jquery.flot.stack.js',
            'scripts/vendor/flot/jquery.flot.pie.js'
          ]);
        }]
      },
      data: {
        requireLogin: true
      }
    })

    /*//forms
    .state('app.forms', {
      url: '/forms',
      template: '<div ui-view></div>'
    })
    //forms/common
    .state('app.forms.common', {
      url: '/common',
      controller: 'FormsCommonCtrl',
      templateUrl: 'views/tmpl/forms/common.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/slider/bootstrap-slider.js',
            'scripts/vendor/touchspin/jquery.bootstrap-touchspin.js',
            'scripts/vendor/touchspin/jquery.bootstrap-touchspin.css',
            'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
          ]);
        }]
      }
    })
    //forms/upload
    .state('app.forms.upload', {
      url: '/upload',
      controller: 'FormUploadCtrl',
      templateUrl: 'views/tmpl/forms/upload.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
          ]);
        }]
      }
    })
    //forms/imgcrop
    .state('app.forms.imgcrop', {
      url: '/imagecrop',
      controller: 'FormImgCropCtrl',
      templateUrl: 'views/tmpl/forms/imgcrop.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
          ]);
        }]
      }
    })
    //tables/datatables
    .state('app.tables.datatables', {
      url: '/datatables',
      controller: 'TablesDatatablesCtrl',
      templateUrl: 'views/tmpl/tables/datatables.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/ColReorder/css/dataTables.colReorder.min.css',
            'scripts/vendor/datatables/ColReorder/js/dataTables.colReorder.min.js',
            'scripts/vendor/datatables/Responsive/dataTables.responsive.css',
            'scripts/vendor/datatables/Responsive/dataTables.responsive.js',
            'scripts/vendor/datatables/ColVis/css/dataTables.colVis.min.css',
            'scripts/vendor/datatables/ColVis/js/dataTables.colVis.min.js',
            'scripts/vendor/datatables/TableTools/css/dataTables.tableTools.css',
            'scripts/vendor/datatables/TableTools/js/dataTables.tableTools.js',
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })
    //charts
    .state('app.charts', {
      url: '/charts',
      controller: 'ChartsCtrl',
      templateUrl: 'views/tmpl/charts.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/flot/jquery.flot.resize.js',
            'scripts/vendor/flot/jquery.flot.orderBars.js',
            'scripts/vendor/flot/jquery.flot.stack.js',
            'scripts/vendor/flot/jquery.flot.pie.js',
            'scripts/vendor/gaugejs/gauge.min.js'
          ]);
        }]
      }
    })*/

    //app core pages (errors, login,signup)
      .state('core', {
      abstract: true,
      url: '/core',
      template: '<div ui-view></div>'
    })
    //login
    .state('core.login', {
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'views/tmpl/pages/login.html',
      data: {
        requireLogin: false
      }
    })
    //signup
    .state('core.signup', {
      url: '/signup',
      controller: 'SignupCtrl',
      templateUrl: 'views/tmpl/pages/signup.html',
      data: {
        requireLogin: false
      }
    })
    //forgot password
    .state('core.forgotpass', {
      url: '/forgotpass',
      controller: 'ForgotPasswordCtrl',
      templateUrl: 'views/tmpl/pages/forgotpass.html',
      data: {
        requireLogin: false
      }
    })
    //page 404
    .state('core.page404', {
      url: '/page404',
      templateUrl: 'views/tmpl/pages/page404.html',
      data: {
        requireLogin: false
      }
    })
    //page 500
    .state('core.page500', {
      url: '/page500',
      templateUrl: 'views/tmpl/pages/page500.html',
      data: {
        requireLogin: false
      }
    })
    //page offline
    .state('core.page-offline', {
      url: '/page-offline',
      templateUrl: 'views/tmpl/pages/page-offline.html',
      data: {
        requireLogin: false
      }
    })
    //locked screen
    .state('core.locked', {
      url: '/locked',
      templateUrl: 'views/tmpl/pages/locked.html',
      data: {
        requireLogin: true
      }
    })
    //example pages
    .state('app.pages', {
      url: '/pages',
      template: '<div ui-view></div>'
    })
    //profile page
    .state('app.pages.profile', {
      url: '/profile',
      controller: 'ProfileCtrl',
      templateUrl: 'views/tmpl/pages/profile.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
          ]);
        }]
      },
      data: {
        requireLogin: true
      }
    })
    .state('app.users', {
      url: '/users',
      controller: 'userCtrl',
      templateUrl: 'views/tmpl/pages/users.html'
    })
    .state('app.education', {
      url: '/education',
      controller: 'educationCtrl',
      templateUrl: 'views/tmpl/pages/education.html'
    })
    .state('app.subject', {
      url: '/subject/:eId',
      controller: 'subjectCtrl',
      templateUrl: 'views/tmpl/pages/subject.html'
    })
    .state('app.exam-type', {
      url: '/exam-type/:eId/:qId',
      controller: 'examCtrl',
      templateUrl: 'views/tmpl/pages/exam-type.html'
    })
    .state('app.subcategory', {
      url: '/subcategory/:eId/:qId/:eTid',
      controller: 'subcategoryCtrl',
      templateUrl: 'views/tmpl/pages/subcategory.html'
    })
    .state('app.quiz', {
      url: '/quiz/:eId/:sId/:eTid/:sCid',
      controller: 'quizCtrl',
      templateUrl: 'views/tmpl/pages/quiz.html'
    })
     .state('app.question', {
      url: '/question/:eId/:qId/:eTid/:sCid',
      controller: 'questionCtrl',
      templateUrl: 'views/tmpl/pages/question.html'
    })
     .state('app.points', {
      url: '/points',
      controller: 'pointsCtrl',
      templateUrl: 'views/tmpl/pages/points.html'
    })
     .state('app.banner', {
      url: '/banners',
      controller: 'bannerCtrl',
      templateUrl: 'views/tmpl/pages/banners.html'
    })
     .state('app.multiple-choice', {
      url: '/multiple-choice/:eId/:qId/:eTid/:sCid/:qtId',
      controller: 'multiplechoiceCtrl',
      templateUrl: 'views/tmpl/pages/multiple-choice.html'
    })
     .state('app.multiple-choice-edit', {
      url: '/multiple-choice-edit/:eId/:qId/:eTid/:sCid/:qsId/:qtId',
      controller: 'multiplechoiceeditCtrl',
      templateUrl: 'views/tmpl/pages/multiple-choice-edit.html'
    })
     .state('app.puzzle', {
      url: '/puzzle/:eId/:qId/:eTid/:sCid/:qtId',
      controller: 'puzzleCtrl',
      templateUrl: 'views/tmpl/pages/puzzle.html'
    })
     .state('app.puzzle-edit', {
      url: '/puzzle-edit/:eId/:qId/:eTid/:sCid/:qsId/:qtId',
      controller: 'puzzleeditCtrl',
      templateUrl: 'views/tmpl/pages/puzzle-edit.html'
    })
     .state('app.fill-blanks', {
      url: '/fill-blanks/:eId/:qId/:eTid/:sCid/:qtId',
      controller: 'fillCtrl',
      templateUrl: 'views/tmpl/pages/fill.html'
    })
    .state('app.fill-blanks-edit', {
      url: '/fill-blanks-edit/:eId/:qId/:eTid/:sCid/:qsId/:qtId',
      controller: 'filleditCtrl',
      templateUrl: 'views/tmpl/pages/fill-edit.html'
    })
  }]);

