'use strict'; 

app.service('dashboardServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.loggedInUsers = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/users/getActiveUsers?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data.length;
            }
        });
    }

    this.gamesPlayed = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/Games?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data.length;
            }
        });
    }
});