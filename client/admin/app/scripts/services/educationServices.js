'use strict'; 

app.service('educationServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];
	
    this.educationReturn = function(accessToken) {
        return $http({
            method: 'GET',
            url: apiUrl + "/EducationTypes",
            params: {
                access_token: accessToken
            },
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.educationCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/EducationTypes",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getEducation = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/EducationTypes?filter[where][id]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data[0];
            }
        });
    }

    this.getQuizByEdu = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[where][educationTypeId]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.educationEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/EducationTypes/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getAllEducation = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/EducationTypes?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.changeEducationStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/EducationTypes?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.deleteEducation = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/EducationTypes/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }
});