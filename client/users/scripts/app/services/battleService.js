'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('battleApi', ['$http', 'APIBase', function($http, APIBase) {
            // this.getSubjects = function() {
            //     return $http.get(APIBase + '/Subjects?&filter[where][active]=true&access_token=' + localStorage.getItem('userToken'))
            //         .success(function(data) {}).error(function(data) {})
            // };
            this.getBattleTypes = function() {
                return $http.get(APIBase + '/ExamTypes?&filter[where][active]=true&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getSubCategories = function() {
                return $http.get(APIBase + '/subCategories?&filter[where][active]=true&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }]);
})();
