(function (  ) {
  angular.module('usersEasyA+')
    .factory('AuthService', function($http, $window) {
    var auth = {
      isAuthenticated: false
    };
    
    return {
        signIn: function (username, password) {
        //FE
        $window.sessionStorage.setItem('token', 'xseix');
        return true;
        //BE
        //return $http.post('/user/signin', {username: username, password: password});
      },
      
      logOut: function () {
        //FE
        $window.sessionStorage.removeItem('token');
        return false;
        //BE
        //return $http.get('/user/logout');
      }
    };
  });
})();