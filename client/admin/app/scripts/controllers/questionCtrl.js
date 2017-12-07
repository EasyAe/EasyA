'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:questionCtrl
 * @description
 * # questionCtrl
 * Controller of the minovateApp
 */
app
    .controller('questionCtrl', function($scope, questionServices, subcategoryServices, examServices, subjectServices, Upload, $uibModal, $state, $stateParams, $filter, $window) {
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        
        $scope.eId = $stateParams.eId;
        $scope.eTid = $stateParams.eTid;
        $scope.sCid = $stateParams.sCid;
        $scope.qId = $stateParams.qId;

        $scope.back = function(){
            $window.location.href = '#/app/subcategory/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid;
        }

        // Get education name
        subjectServices.getEducation($scope.eId).then(function(response){
           $scope.education = response;
        });

        // Get Subject/Quiz name
        examServices.getEdQuiz($scope.qId).then(function(response){
           $scope.subject = response;
        });

        // Get Exam type name
        subcategoryServices.getExamType($scope.eTid).then(function(response){
           $scope.examType = response;
        });

        // Get sub category name
        questionServices.getSubCat($scope.sCid).then(function(response){
           $scope.subcategory = response;
        });

        $scope.options = [{
            value: '5',
        }, {
            value: '8',
        }, {
            value: '10',
        }, {
            value: '14',
        }, {
            value: '18',
        }];
        // pagination
        $scope.currentPage = 0;
        $scope.pageSize = 14;
        $scope.questions = [];
        $scope.searchquestion = '';

        $scope.getData = function() {
            return $filter('filter')($scope.questions, $scope.searchquestion)
        }

        $scope.numberOfPages = function() {
            return Math.ceil($scope.getData().length / $scope.pageSize);
        }

        // Retrive All Questions
        questionServices.getQuizQuestion($scope.sCid).then(function(response){
           $scope.questions = response;
        });

        $scope.changeQuestionLevel = function(id, status){
            if(status){
                var data = {
                    id : id,
                    level11 : false
                }
                questionServices.changeQuestionLevel(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    level11 : true
                }
                questionServices.changeQuestionLevel(data).then(function(response){
                    $state.reload();
                });
            }
        }

        $scope.changeQuestionStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                questionServices.changeQuestionStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                questionServices.changeQuestionStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }

        $scope.showDeleteModel = function(id){
            $scope.qId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'questionDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.qId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.qId = items;
            $scope.ok = function (id) {
                questionServices.getQuestionById(id).then(function successCallback(response) {
                    // Delete Question image
                    var data = {
                        container : "edootech-question-images",
                        file : response.imageUrl
                    };
                    examServices.deleteImages(data).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
                
                questionServices.deleteQuestion(id).then(function successCallback(response) {
                    $uibModalInstance.close();
                    $state.reload();
                }, function errorCallback(response) {
                    return response;
                });
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }


    });

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
