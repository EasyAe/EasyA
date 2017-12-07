'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('rankServices', ['$http', 'APIBase', function($http, APIBase) {
            this.getNationalRanking = function() {
                return $http.get(APIBase + '/UserDetails/getNationalRanking?filter[include]=institution&filter[include]=occupation&filter[include]=city&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getRegionalRanking = function() {
                return $http.get(APIBase + '/UserDetails/getRegionalRanking?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getSchoolRanking = function(InstId) {
                return $http.get(APIBase + '/UserDetails/getSchoolRanking?institutionId=' + InstId + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            
        }]);
})();