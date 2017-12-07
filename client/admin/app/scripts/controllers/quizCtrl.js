'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:subcategoryCtrl
 * @description
 * # subcategoryCtrl
 * Controller of the minovateApp
 */
app
    .controller('quizCtrl', function($scope, quizServices, examServices, Upload, $uibModal, $state, $stateParams, $window) {
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        $scope.eId = $stateParams.eId;
        $scope.sId = $stateParams.sId;
        $scope.eTid = $stateParams.eTid;
        $scope.sCid = $stateParams.sCid;

        $scope.back = function(){
            $window.location.href = '#/app/subcategory/'+$scope.eId+'/'+$scope.sId+'/'+$scope.eTid;
        }

        quizServices.getAllQuiz($scope.eId,$scope.sId,$scope.eTid,$scope.sCid).then(function successCallback(response) {
            $scope.quizs = response;
            $scope.quizCount = $scope.quizs.length;
        }, function errorCallback(response) {
            return response;
        });

        // Create New Quiz
        $scope.createQuiz = function(){
            var quizImageData = {
                container:"edootech-quiz-images",
                file : $scope.image
            }
            quizServices.uploadImages(quizImageData).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var QuizData = {
                    name:$scope.name,
                    active: true,
                    imageUrl: imageUrl,
                    educationTypeId: $scope.eId,
                    examTypeId: $scope.eTid,
                    subCategoryId:$scope.sCid,
                    subjectId: $scope.sId
                }
                quizServices.quizCreate(QuizData).then(function successCallback(response) {
                    $state.reload();
                }, function errorCallback(response) {
                    return response;
                });
            }, function errorCallback(response) {
                console.log(response);
                return response;
            });
        }

        $scope.changeQuizStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                quizServices.changeQuizStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                quizServices.changeQuizStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }

        $scope.showDeleteModel = function(id){
            $scope.quizId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'views/tmpl/pages/deletemodel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.quizId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.quizId = items;
            $scope.ok = function (id) {
                quizServices.deleteQuiz(id).then(function successCallback(response) {
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

        $scope.showQuizEditModel = function(id){
            $scope.quizId = id;
            quizServices.getQuiz(id).then(function successCallback(response) {
                console.log(response);
                var modalInstance = $uibModal.open({
                    templateUrl: 'quizEditModel.html',
                    controller: QuizModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response;
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var QuizModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.quiz = items;
           
            $scope.updateQuiz = function (id) {
                var quizId = id;
                var quizImageData = {
                    container:"edootech-quiz-images",
                    file : $scope.image
                }
                if($scope.image != null){
                    quizServices.uploadImages(quizImageData).then(function successCallback(response) {
                        var imageUrl = response.data.result.files.file[0].providerResponse.location;
                        var updateQuizData = {
                            name: $scope.quiz.name,
                            active: true,
                            imageUrl: imageUrl,
                            id: quizId,
                            educationTypeId: $scope.eId,
                            examTypeId: $scope.eTid,
                            subCategoryId:$scope.sCid,
                            subjectId: $scope.sId
                        }
                        quizServices.quizEdit(updateQuizData).then(function successCallback(response) {
                            $uibModalInstance.close();
                            $state.reload();
                        }, function errorCallback(response) {
                            return response;
                        });
                    }, function errorCallback(response) {
                        return response;
                    });
                }else{
                    var updateQuizData = {
                        name: $scope.quiz.name,
                        active: true,
                        id: quizId,
                        educationTypeId: $scope.eId,
                        examTypeId: $scope.eTid,
                        subCategoryId:$scope.sCid,
                        subjectId: $scope.sId
                    }
                    quizServices.quizEdit(updateQuizData).then(function successCallback(response) {
                        $uibModalInstance.close();
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
                }
            };
        }
    });