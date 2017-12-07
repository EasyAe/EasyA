var app = angular.module('edootech', [
	'ui.router',
	'ngMaterial',
	'ngAnimate',
]).config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	$mdThemingProvider.theme('default').primaryPalette('green');


	$urlRouterProvider.otherwise("/auth");
	$stateProvider.state('auth', {
		url: "/auth",
		controller: 'authCtrl',
		templateUrl: "views/auth.html"
	}).state('home', {
		url: "/home",
		controller: 'homeCtrl',
		templateUrl: "views/home.html"
	}).state('users', {
		url: "/users",
		controller: 'usersCtrl',
		templateUrl: "views/users.html"
	}).state('quiz', {
		url: "/quiz",
		controller: 'quizCtrl',
		templateUrl: "views/quiz.html"
	}).state('points', {
		url: "/points",
		controller: 'pointsCtrl',
		templateUrl: "views/points.html"
	}).state('banner', {
		url: "/banner",
		controller: 'bannerCtrl',
		templateUrl: "views/banner.html"
	});
}).run(function(user, $rootScope, $state) {
	user.registerObserverCallback(function() {
	console.log(user.user);
		if (user.user) {
			$rootScope.nav = true;
		} else {
			$rootScope.nav = false;
		}
	});
	
	// 
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
		if (!fromState.name) { // if no previous state === 1st time visiting => auth user
			var gotoState = "home"
			if (toState.name !== "auth") gotoState = toState.name;
			user.auth(gotoState);
		} else if (!user.user && toState.name !== "auth") { // unauth users can view only auth view
			event.preventDefault();
			$state.go("auth");
		} else if (user.user && toState.name === "auth") { // auth users cannor view auth view
			event.preventDefault();
			$state.go("home");
		}
	})
});

app.directive("toolBar", function($mdDialog, user,  $state) {
	return {
		restrict : "E",
		templateUrl : "components/toolbar.html",
		scope: true,
		link: function(scope) {
			// console.log($state.$current.name);
			// scope.state = $state.$current.name;
			// scope.user = { name: user.name, role: user.role };

			// user.registerObserverCallback(function() {
			// 	scope.user = { name: user.name, role: user.role };
			// });
			
			scope.logout = function() {
				user.logout();
			}

		}
	};
});

app.directive("sideNav", function($mdDialog, user,  $state) {
	return {
		restrict : "E",
		templateUrl : "components/sidenav.html",
		scope: true,
		link: function(scope) {
			// console.log($state.$current.name);
			// scope.state = $state.$current.name;
			// scope.user = { name: user.name, role: user.role };

			// user.registerObserverCallback(function() {
			// 	scope.user = { name: user.name, role: user.role };
			// });
			
		

		}
	};
});