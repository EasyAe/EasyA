'use strict'; 

app.service('quizServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.quizCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Quizzes",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getQuiz = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[include]=subject&filter[include]=educationType&filter[where][id]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data[0];
            }
        });
    }

    this.quizUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Quizzes?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.quizEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Quizzes/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getAllQuiz = function(eId,sId,eTid,sCid) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[where][educationTypeId]="+eId+"&filter[where][subjectId]="+sId+"&filter[where][examTypeId]="+eTid+"&filter[where][subCategoryId]="+sCid+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
            	console.log(response.data)
                return response.data;
            }
        });
    }

    this.changeQuizStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Quizzes?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.deleteQuiz = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/Quizzes/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.uploadImages = function(data) {
        var filename = new Date().getTime()+'.' + data.file.name.split(".")[1];
        var imgFile = new File([data.file], filename, {type:data.file.type});
        data.file = imgFile;
        var fd = new FormData();
        fd.append('file', data.file);
        return $http.post(apiUrl + '/containers/'+data.container+'/upload?access_token=' + accessToken, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function(response) {})
        .error(function(response) {});
    }
});