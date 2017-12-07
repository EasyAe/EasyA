'use strict'; 

app.service('bannerServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.getAllBanners = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/Banners?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response;
            }
        });
    }

    this.bannerCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Banners",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.deleteBanner = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/Banners/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.getBanner = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Banners/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.bannerUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Banners/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }
});