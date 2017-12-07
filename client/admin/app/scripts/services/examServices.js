'use strict'; 

app.service('examServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.getQuiz = function(eid,sid) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[where][educationTypeId]="+eid+"&filter[where][subjectId]="+sid+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                // console.log(response.data);
                return response.data;
            }
        });
    }

    this.getEdQuiz = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[where][id]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data[0];
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

    this.getSubCategory = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/subCategories?filter[where][examTypeId]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.examTypeCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/ExamTypes",
            data: data,
            responseType: "json"
        }).then(function (response) {
        	if (response.data){
                return response.data;
            }
        });
    }

    this.examTypeUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/ExamTypes?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
        	if (response.data){
                return response.data;
            }
        });
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

    this.overRideImages = function(data) {
        console.log(data);
        var filename = data.old_filename+'.' + data.file.name.split(".")[1];
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

    this.deleteImages = function(data) {
        var url = data.file.split('/');
        var fileName = url[url.length-1];
        console.log(fileName);
        return $http({
            method: 'DELETE',
            url: apiUrl + '/containers/'+data.container+'/files/'+fileName+'?access_token=' + accessToken, 
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response;
            }
        });
    }

    this.getExamType = function(qid) {
        return $http({
            method: 'GET',
            url: apiUrl + "/ExamTypes?filter[where][quizId]="+qid+"&access_token="+accessToken, 
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getExamTypeById = function(qid) {
        return $http({
            method: 'GET',
            url: apiUrl + "/ExamTypes/"+qid+"?access_token="+accessToken, 
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.changeExamStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/ExamTypes?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.deleteExamType = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/ExamTypes/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }
});