'use strict'; 

app.service('subcategoryServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];

    this.getQuiz = function(eid,sid,etid) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Quizzes?filter[where][educationTypeId]="+eid+"&filter[where][subjectId]="+sid+"&filter[where][examTypeId]="+etid+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                console.log(response.data);
                return response.data;
            }
        });
    }

    this.getSubject = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Subjects?filter[where][id]="+id+"&access_token="+accessToken,
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

    this.getExamType = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/ExamTypes?filter[where][id]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data[0];
            }
        });
    }

    this.getAllSubCat = function(id) {
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

    this.getSubCatQuestion = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Questions?filter[where][subCategoryId]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.changeSubCatStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/subCategories?access_token="+accessToken,
            data : data,
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

    this.getSubCat = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/subCategories/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.subCatEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/subCategories/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.deleteSubCat = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/subCategories/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.deleteQuestion = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/Questions/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.subCatCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/subCategories",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.subCatUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/subCategories?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }
});