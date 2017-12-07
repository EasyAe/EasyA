app.service('api', function($http) {
	return {
		auth: function() {
			return $http.get('/auth');
		},
		logout: function() {
			return $http.get('/logout');
		},
		login: function(data) {
			return $http.post('/login', data);
		},
		register: function(data) {
			return $http.post('/register', data);
		},
	};
});