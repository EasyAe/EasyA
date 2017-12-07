app.service('user', function(api, $state, $timeout) {
	var observerCallbacks = [];
	var notifyObservers = function() {
		angular.forEach(observerCallbacks, function(callback){
			callback();
		});
	};

	return {
		user: null,
		registerObserverCallback: function(callback) {
			observerCallbacks.push(callback);
		},
		auth: function(gotoState) {
			var that = this;
			$timeout(function() {
				var email = localStorage.getItem('email');
				if (email) {
					that.user = email;
					$state.go(gotoState);
				} else {
					$state.go("auth");
				}
				notifyObservers();
			});
			
			// var that = this;
			// api.auth().then(function(res) {
			// 	console.log(res);
			// 	that.name = res.data.name;
			// 	that.role = res.data.role;
			// 	notifyObservers();
			// }, function(err) {
			// 	console.log(err);
			// });
		},
		logout: function() {
			localStorage.removeItem('email');
			this.user = null;
			notifyObservers();
			$state.go("auth");
			// var that = this;
			// api.logout().then(function(res) {
			// 	toastr.success("Goodbye " + that.name);
			// 	that.name = null;
			// 	that.role = null;
			// 	notifyObservers();
			// }, function(err) {
			// 	toastr.error(err);
			// });
		},
		login: function(user, next) {
			this.user = user.email;
			localStorage.setItem('email', user.email);
			notifyObservers();
			$state.go("home");
			// var that = this;
			// api.login(user).then(function(res) {
			// 	console.log(res);
			// 	that.name = res.data.name;
			// 	that.role = res.data.role;
			// 	notifyObservers();
			// 	toastr.success("Welcome " + that.name);
			// 	if (next) next();
			// }, function(err) {
			// 	console.log(err);
			// });
		},
		register: function(user, next) {
			// if (user.password !== user.repeatPassword) {
			// 	toastr.error("Repeat Password and Password are not equal");
			// 	return;
			// }
			// var that = this;
			// api.register(user).then(function(res) {
			// 	console.log(res);
			// 	that.name = res.data.name;
			// 	that.role = res.data.role;
			// 	notifyObservers();
			// 	if (next) next();
			// }, function(err) {
			// 	toastr.error(err.data);
			// });
		}
	};
});