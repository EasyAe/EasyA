'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('cityApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getCities = function() {
                return $http.get(APIBase + '/Cities?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getRegion = function() {
                return $http.get(APIBase + '/Regions?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.userCity = function(cityId) {
                return $http.get(APIBase + '/Cities/' + cityId + '?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }]);
})();
