'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('bootcampApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getUserBootcamp = function() {
                return $http.get(APIBase + '/users/'+ localStorage.getItem('userId') +'/bootcampsResolved?filter[include][bootcamp][question]=questionType&filter[include][bootcamp][question][subCategory][examType]=quiz&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getUserBootcampId = function(id) {
                return $http.get(APIBase + '/users/'+ localStorage.getItem('userId') +'/bootcampsResolved/' + id + '?&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getBootcampId = function(id) {
                return $http.get(APIBase + '/Bootcamps/' + id + '?filter[include]=question&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getUserAnswer = function(id) {
                return $http.get(APIBase + '/Answers/' + id + '?&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getRightAnswer = function(id) {
                return $http.get(APIBase + '/Questions/'+ id +'/answers?filter[where][correct]=true&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getBootCampPuzzle = function(id) {
                return $http.get(APIBase + '/Questions/'+ id +'/answers?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getBootcamp = function(id) {
                return $http.get(APIBase + '/Answers/' + id + '?&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.sendMarkResolved = function(mark_data) {
                return $http.post(APIBase + '/BootcampResolveds/markResolved?access_token=' + localStorage.getItem('userToken') + '&userId='+ mark_data.userId + '&bootcampResolvedId='+ mark_data.bootcampResolvedId + '&questionId='+ mark_data.questionId, mark_data)
                    .success(function(data) {}).error(function(data) {})
            };
            this.getQuestions = function(id) {
                return $http.get(APIBase + '/Questions/'+id+'?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getAnswers = function() {
                return $http.get(APIBase + '/Answers?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getAnswerCheck = function(quesid, answerArray, usrid) {
                console.log('answerCheck');
                return $http.get(APIBase + '/Answers/answerCheck?questionId='+quesid+'&answer=['+answerArray+']&userId='+usrid+'&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getSingleAnswer = function(currentStatus) {

                return $http.get(APIBase + '/Questions?filter='+JSON.stringify(currentStatus)+'&access_token=' + localStorage.getItem('userToken'))

                    .success(function(data) {}).error(function(data) {})
            };

            // /Questions?filter={"where":{"id":quesid},"include":{"relation":"answers","scope":{"fields":["content","id"]}}}&access_token=

                            // return $http.get(APIBase + '/Answers/answerCheck?questionId='+quesid+'&answer=['+answerArray+']&userId='+usrid+'&access_token=' + localStorage.getItem('userToken'))
                // return $http.get(APIBase + '/Questions?filter[where][id]='+quesid+'&filter[include]=answers&access_token=' + localStorage.getItem('userToken'))
        }]);
})();


