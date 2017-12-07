'use strict'; 

app.service('userServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.getAllUsers = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/users?filter[include][userDetails]=institution&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
        	console.log(response);
            if (response.data){
                return response;
            }
        });
    }

    this.getAllInstitutions = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/Institutions?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            console.log(response);
            if (response.data){
                return response;
            }
        });
    }

    this.changeUserStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/users?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.deleteUser = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/users/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.getUser = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/users?filter[include][userDetails]=institution&filter[where][id]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data[0];
            }
        });
    }

    this.userEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/users/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.userDetailEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/UserDetails/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }
});