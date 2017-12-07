'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:subcategoryCtrl
 * @description
 * # subcategoryCtrl
 * Controller of the minovateApp
 */
app
    .controller('subcategoryCtrl', function($scope, subcategoryServices, questionServices, subjectServices, quizServices, examServices, Upload, $uibModal, $state, $stateParams, $window) {
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        $scope.eId = $stateParams.eId;
        $scope.qId = $stateParams.qId;
        $scope.eTid = $stateParams.eTid;

        $scope.back = function(){
            $window.location.href = '#/app/exam-type/'+$scope.eId+'/'+$scope.qId;
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

        // Retrive Sub Category 
        subcategoryServices.getAllSubCat($scope.eTid).then(function(response){
           $scope.subcategory= response;
        });
                   
        
        $scope.changeSubCatStatus = function(id, status, i){ 
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                subcategoryServices.changeSubCatStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                $scope.errorenable = false;
                questionServices.getQuizQuestion(id).then(function(response){
                    $scope.questionCount = response.length;
                    questionServices.getLevel11Question(id).then(function(response){
                        $scope.question11Count = response.length;
                        if($scope.questionCount >=11 && $scope.question11Count >=1){
                            subcategoryServices.changeSubCatStatus(data).then(function(response){
                                $state.reload();
                            });
                        }else{
                            $scope.errorenable = true;
                            $scope.errorenablecat = "You need atleast 11 questions with 1 level11 question.";
                            $scope.subcategory[i].active = false;
                        }
                    });
                    
                });
            }
        }

        $scope.showSubCatEditModel = function(id){
            $scope.subCat = id;
            subcategoryServices.getSubCat(id).then(function successCallback(response) {
                console.log(response);
                var modalInstance = $uibModal.open({
                    templateUrl: 'subCatEditModel.html',
                    controller: SubCatModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response;
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var SubCatModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.subCat = items;
            $scope.updateSubCat = function (id) {
                var subCatId = id;
                if($scope.subCatEditImage != null){
                    subcategoryServices.getSubCat(id).then(function successCallback(response) {
                        var old_url = response.imageUrl.split("/")[3];
                        var old_filename = old_url.split(".")[0];
                        var data = {
                            container : "edootech-subcat-images",
                            file : $scope.subCatEditImage,
                            old_filename : old_filename
                        };
                        examServices.overRideImages(data).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var updateSubCatData = {
                                name:$scope.subCat.name,
                                imageUrl: imageUrl,
                                id: subCatId,
                                examTypeId : $scope.eTid
                            }
                            subcategoryServices.subCatEdit(updateSubCatData).then(function successCallback(response) {
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
                    var updateSubCatData = {
                        name:$scope.subCat.name,
                        id: subCatId,
                        examTypeId : $scope.eTid
                    }
                    subcategoryServices.subCatEdit(updateSubCatData).then(function successCallback(response) {
                        $uibModalInstance.close();
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
                }
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        $scope.showSubCatDeleteModel = function(id){
            $scope.subCatId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'subCatDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.subCatId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.subCatId = items;
            $scope.ok = function (id) {
                subcategoryServices.getSubCatQuestion(id).then(function successCallback(response) {
                    for(var i=0;i<response.length;i++){
                        var data = {
                            container : "edootech-question-images",
                            file : response[i].imageUrl
                        };
                        examServices.deleteImages(data).then(function successCallback(response) {
                        }, function errorCallback(response) {
                            return response;
                        });
                        subcategoryServices.deleteQuestion(response[i].id).then(function successCallback(response) {
                            
                        }, function errorCallback(response) {
                            return response;
                        });    
                    }
                }, function errorCallback(response) {
                    return response;
                });
                subcategoryServices.getSubCat(id).then(function successCallback(response) {
                    var data = {
                        container : "edootech-subcat-images",
                        file : response.imageUrl
                    };
                    examServices.deleteImages(data).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
                subcategoryServices.deleteSubCat(id).then(function successCallback(response) {
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

        $scope.createSubCat = function(){
            var subCatImageData = {
                container:"edootech-subcat-images",
                file : $scope.subCatImage
            }
            examServices.uploadImages(subCatImageData).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var data = {
                    name:$scope.subCatName,
                    imageUrl:imageUrl,
                    examTypeId : $scope.eTid
                };
                subcategoryServices.subCatCreate(data).then(function successCallback(response) {
                    var subCatId = response.id;
                    $state.reload();
                });
            });
        }
    });
