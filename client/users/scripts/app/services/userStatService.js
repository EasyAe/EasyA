'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('userStatServices', ['$http', 'APIBase', function($http, APIBase) {
            this.getLostBattles = function() {
                return $http.get(APIBase + '/GamePlays/getLostBattles?userId=' + localStorage.getItem('userId') + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getWonBattles = function() {
                return $http.get(APIBase + '/GamePlays/getWonBattles?userId=' + localStorage.getItem('userId') + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getTieBattles = function() {
                return $http.get(APIBase + '/GamePlays/getTieBattles?userId=' + localStorage.getItem('userId') + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getTotalBattles = function() {
                return $http.get(APIBase + '/GamePlays/getTotalBattles?userId=' + localStorage.getItem('userId') + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            
        }]);
})();