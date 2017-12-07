
app.controller('authCtrl', function($scope, user) {
	$scope.user = {};

	// $scope.cancel = function() {
	// 	$mdDialog.cancel();
	// };

	$scope.logIn = function() {
		console.log("asd");
		user.login($scope.user);
	};
});