'use strict'; 

app.service('pointsServices', function($http, apiUrl) {
	var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

	this.getpoints = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Points?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getCount = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/Points/count?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
        	console.log(response);
            if (response){
                return response.data;
            }
        });
    }

    this.updatePoint = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Points/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

});