'use strict'; 

app.service('questionServices', function($http, apiUrl) {
    var key = '$LoopBack$accessTokenId';
    var accessToken = localStorage[key];
    
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
            url: apiUrl + "/ExamTypes/"+id+"?access_token="+accessToken,
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
            url: apiUrl + "/Quizzes/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getQuestionById = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/questions?filter=%7B%22where%22:%7B%22id%22:"+id+"%7D,%22include%22:%7B%22relation%22:%22answers%22,%22scope%22:{%22order%22:%22order%20ASC%22}%7D%7D&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.getThemes = function() {
        return $http({
            method: 'GET',
            url: apiUrl + "/Themes?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.themeCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Themes",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
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
    
    this.getQuizQuestion = function(subCatId) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Questions?filter[include]=questionType&filter[include][theme]&filter[where][subCategoryId]="+subCatId+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                console.log(response.data);
                return response.data;
            }
        });
    }

    this.getLevel11Question = function(subCatId) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Questions?filter[include]=questionType&filter[include][theme]&filter[where][subCategoryId]="+subCatId+"&filter[where][level11]=true&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                console.log(response.data);
                return response.data;
            }
        });
    }

    this.changeQuestionLevel = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Questions?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.changeQuestionStatus = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Questions?access_token="+accessToken,
            data : data,
            responseType: "json"
        }).then(function (response) {});
    }

    this.questionCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Questions",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.answerCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Answers",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.answerEdit = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Answers",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.answerUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Answers/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.answerCorrectUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Answers/"+data.id+"?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.questionUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Questions",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.deleteQuestion = function(id) {
        return $http({
            method: 'DELETE',
            url: apiUrl + "/Questions/"+id+"?access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {});
    }

    this.getQuestion = function(id) {
        return $http({
            method: 'GET',
            // url: apiUrl + "/Questions?filter[include]=answers&filter[where][id]="+id+"&access_token="+accessToken,
            url: apiUrl + "/questions?filter=%7B%22where%22:%7B%22id%22:"+id+"%7D,%22include%22:%7B%22relation%22:%22answers%22,%22scope%22:{%22order%22:%22order%20ASC%22}%7D%7D&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
        	return response.data[0];
        });
    }

    this.getBootcamp = function(id) {
        return $http({
            method: 'GET',
            url: apiUrl + "/Bootcamps/?filter[where][questionId]="+id+"&access_token="+accessToken,
            responseType: "json"
        }).then(function (response) {
        	return response.data;
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

    this.uploadAnswerImages = function(data) {
        var filename = new Date().getTime()+'-'+data.index+'.' + data.file.name.split(".")[1];
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

    this.bootcampCreate = function(data) {
        return $http({
            method: 'POST',
            url: apiUrl + "/Bootcamps",
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }

    this.bootcampUpdate = function(data) {
        return $http({
            method: 'PUT',
            url: apiUrl + "/Bootcamps?access_token="+accessToken,
            data: data,
            responseType: "json"
        }).then(function (response) {
            if (response.data){
                return response.data;
            }
        });
    }
});