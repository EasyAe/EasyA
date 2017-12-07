'use strict';

(function() {
    angular.module('usersEasyA+')
        .service('userApi', ['$http', 'APIBase', function($http, APIBase) {
            this.registerUser = function(user) {
                return $http.post(APIBase + '/users', user)
                    .success(function(data) {}).error(function(data) {})
            };
            this.logUser = function(user) {
                return $http.post(APIBase + '/users/login', user)
                    .success(function(data) {}).error(function(data) {})
            };
            
            
            this.logoutUser = function() {
                return $http.post(APIBase + '/users/logout?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.userEditDetails = function() {
                return $http.get(APIBase + '/users/' + localStorage.getItem('userId') + '/UserDetails?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.userDetails = function() {
                return $http.get(APIBase + '/UserDetails?filter[include]=occupation&filter[include]=region&filter[include]=institution&filter[where][usersId]=' + localStorage.getItem('userId') + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.allUserDetails = function() {
                return $http.get(APIBase + '/UserDetails?filter[include]=occupation&filter[include]=region&filter[include]=institution&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.userDetailsBattleFriend = function(userId) {
                return $http.get(APIBase + '/UserDetails?filter[include]=occupation&filter[include]=region&filter[include]=institution&filter[where][usersId]=' + userId + '&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            // this.userDetails = function() {
            //     return $http.get(APIBase + '/UserDetails?filter={where:{usersId:3},{"include":{"relation":"institution","where":{"type":"region"}}}' + '&access_token=WeJNgrkzahzUSVyuv0wbzTIyAUgoN6bJ5y7pGCtxI2Gbk0wZxc5Lh4CkYv3Nopd7')
            //         .success(function(data) {}).error(function(data) {})
            // };
            this.resetPwd = function(user_data) {
                return $http({
    method: 'POST',
    url: APIBase + '/users/reset',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },
    data: user_data
}).success(function(data) {}).error(function(data) {});
            };

            
            this.forgotPassword = function(user_data) {
                return $http.put(APIBase + '/users/changePassword?access_token=' + user_data.access_token + '&newPassword=' + user_data.newPassword + '&confirmation='+ user_data.confirmation)
                    .success(function(data) {}).error(function(data) {})
            };
            this.resetPassword = function(user_data) {
                return $http.put(APIBase + '/users/updatePassword/?access_token=' + localStorage.getItem('userToken') + '&oldPassword='+ user_data.oldPassword + '&newPassword=' + user_data.newPassword + '&confirmation='+ user_data.confirmation)
                    .success(function(data) {}).error(function(data) {})
            };
            this.editUser = function(edit) {
                return $http.put(APIBase + '/UserDetails/?access_token=' + localStorage.getItem('userToken'), edit)
                    .success(function(data) {}).error(function(data) {})
            };
            this.editWelcomeUser = function(edit) {
                return $http.put(APIBase + '/users/' + localStorage.getItem('userId') + '/UserDetails?access_token=' + localStorage.getItem('userToken'), edit)
                    .success(function(data) {}).error(function(data) {})
            };
            this.userInstitution = function(instId) {
                return $http.get(APIBase + '/Institutions/' + instId + '/?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.userOccupation = function(ocpId) {
                return $http.get(APIBase + '/Occupations/' + ocpId + '/?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.getPoints = function() {
                return $http.get(APIBase + '/Points?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
            this.editProPic = function(files) {
                var fd = new FormData();
                fd.append('file', files.file);
                return $http.post(APIBase + '/containers/edootech-profile-photos/upload?access_token=' + localStorage.getItem('userToken'), fd, {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }
                    })
                    .success(function(data) {})
                    .error(function(data) {});
            };
            this.getAds = function(titleId) {
                return $http.get(APIBase + '/Banners?filter[where][id]='+titleId+'&access_token=' + localStorage.getItem('userToken'), titleId)
                    .success(function(data) {}).error(function(data) {})
            };
        }])
        .service('quizzApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getQuizzes = function() {
                return $http.get(APIBase + '/Quizzes?filter[include][educationType]&filter[include]=quizId&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }])
        .service('institutionApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getInst = function() {
                return $http.get(APIBase + '/Institutions?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }])
        .service('occupationApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getOccp = function() {
                return $http.get(APIBase + '/Occupations?access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }])
        .service('questionApi', ['$http', 'APIBase', function($http, APIBase) {
            this.getQuestion = function(SubCatId, questionIds) {
                return $http.get(APIBase + '/Questions/getRandomQuestion?subCategoryId='+SubCatId+'&questionIds=['+questionIds+']&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }])

        .service('answerApi', ['$http', 'APIBase', function($http, APIBase) {
            this.checkSinglePlayerAnswer = function(checkAnswer) {
                return $http.get(APIBase + '/Answers/answerCheck?questionId='+checkAnswer.questionId+'&answer=['+checkAnswer.answer+']&userId='+checkAnswer.userId+'&access_token=' + localStorage.getItem('userToken'))
                    .success(function(data) {}).error(function(data) {})
            };
        }]);
        
})();
