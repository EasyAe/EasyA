'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:examCtrl
 * @description
 * # examCtrl
 * Controller of the minovateApp
 */
app
    .controller('examCtrl', function($scope, examServices, subjectServices, subcategoryServices, Upload, $uibModal, $state, $stateParams, $window) {
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        $scope.eId = $stateParams.eId;
        $scope.qId = $stateParams.qId;

        $scope.back = function(){
            $window.location.href = '#/app/subject/'+$scope.eId;
        }

        // Get education name
        subjectServices.getEducation($scope.eId).then(function(response){
           $scope.education = response;
        });

        // Get Subject/Quiz name
        examServices.getEdQuiz($scope.qId).then(function(response){
           $scope.subject = response;
        });

        $scope.createExamType = function(){
            var typeImage = {
                container:"edootech-exam-images",
                file : $scope.examTypeImage
            }
            examServices.uploadImages(typeImage).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var data = {
                    name:$scope.examTypeName,
                    imageUrl: imageUrl,
                    instructions:$scope.examInstruction,
                    quizId : $scope.qId
                }
                examServices.examTypeCreate(data).then(function successCallback(response) {
                    var id = response.id;
                    $state.reload();
                    // $window.location.href = '#/app/subcategory/'+$scope.eId+'/'+$scope.sId+'/'+id;
                }, function errorCallback(response) {
                    return response;
                });
            }, function errorCallback(response) {
                return response;
            });
        }

        examServices.getExamType($scope.qId).then(function(response){
            $scope.exam_type = response;
        });
        

        $scope.changeExamStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                examServices.changeExamStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                examServices.changeExamStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }

        $scope.showExamTypeEditModel = function(id){
            $scope.eId = id;
            examServices.getExamTypeById(id).then(function successCallback(response) {
                console.log(response);
                var modalInstance = $uibModal.open({
                    templateUrl: 'examTypeEditModel.html',
                    controller: ExamTypeModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response;
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var ExamTypeModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.exam = items;
            $scope.updateExamType = function (id) {
                var eId = id;
                if($scope.examTypeEditImage != null){
                    examServices.getExamTypeById(id).then(function successCallback(response) {
                        var old_url = response.imageUrl.split("/")[3];
                        var old_filename = old_url.split(".")[0];
                        var ImageData = {
                            container : "edootech-exam-images",
                            file : $scope.examTypeEditImage,
                            old_filename : old_filename
                        };
                        examServices.overRideImages(ImageData).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var updateExamData = {
                                name:$scope.exam.name,
                                imageUrl: imageUrl,
                                id: eId,
                                instructions:$scope.exam.instructions,
                                quizId : $scope.qId
                            }
                            examServices.examTypeUpdate(updateExamData).then(function successCallback(response) {
                                $uibModalInstance.close();
                                $state.reload();
                            }, function errorCallback(response) {
                                return response;
                            });
                        }, function errorCallback(response) {
                            return response;
                        });
                    }, function errorCallback(response) {
                        return response;
                    });
                }else{
                    var updateExamData = {
                        name:$scope.exam.name,
                        id: eId,
                        instructions:$scope.exam.instructions,
                        quizId : $scope.qId
                    }
                    examServices.examTypeUpdate(updateExamData).then(function successCallback(response) {
                        $uibModalInstance.close();
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
                }
            }
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        $scope.showExamTypeDeleteModel = function(id){
            $scope.eId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'examTypeDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.eId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.eId = items;
            $scope.ok = function (id) {
                examServices.getSubCategory(id).then(function successCallback(response) {
                    console.log(response);
                    for(var i=0;i<response.length;i++){
                        subcategoryServices.getSubCatQuestion(response[i].id).then(function successCallback(response) {
                            for(var j=0;j<response.length;j++){
                                var data = {
                                    container : "edootech-question-images",
                                    file : response[j].imageUrl
                                };
                                examServices.deleteImages(data).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                });
                                subcategoryServices.deleteQuestion(response[j].id).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                });    
                            }
                        }, function errorCallback(response) {
                            return response;
                        });
                        var data = {
                            container : "edootech-subcat-images",
                            file : response[i].imageUrl
                        };
                        examServices.deleteImages(data).then(function successCallback(response) {
                        }, function errorCallback(response) {
                            return response;
                        });
                        subcategoryServices.deleteSubCat(response[i].id).then(function successCallback(response) {
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                }, function errorCallback(response) {
                    return response;
                });
                examServices.getExamTypeById(id).then(function successCallback(response) {
                    var data = {
                        container : "edootech-exam-images",
                        file : response.imageUrl
                    };
                    examServices.deleteImages(data).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
                examServices.deleteExamType(id).then(function successCallback(response) {
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
