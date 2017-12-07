'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:quizCtrl 
 * @description
 * # quizCtrl
 * Controller of the minovateApp 
 */
app
    .controller('educationCtrl', function($scope, educationServices, subjectServices, examServices, subcategoryServices, Upload, $uibModal, $state) {

        var key = '$LoopBack$accessTokenId';
        var accessToken = localStorage[key];
        
        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        // Retrive Education types
        educationServices.educationReturn(accessToken).then(function(response){
           $scope.education_options = response;
        });

        // Create New Quiz
        $scope.createEducation = function(){
            var educationData = {
                name : $scope.name
            }
            educationServices.educationCreate(educationData).then(function successCallback(response) {
                localStorage.removeItem('ExamType');
                localStorage.removeItem('SubjectId');
                $state.reload();
            }, function errorCallback(response) {
                return response;
            });
        }

        // Retrive All Quiz
        educationServices.getAllEducation().then(function(response){
           $scope.educationDatas = response;
        });

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
                educationServices.getQuizByEdu(id).then(function successCallback(response) {
                    for(var m=0;m<response.length;m++){
                        subjectServices.getExamType(response[m].id).then(function successCallback(response) {
                            console.log(response);
                            for(var k=0;k<response.length;k++){
                                examServices.getSubCategory(response[k].id).then(function successCallback(response) {
                                    console.log(response);
                                    for(var i=0;i<response.length;i++){
                                        subcategoryServices.getSubCatQuestion(response[i].id).then(function successCallback(response) {
                                            for(var j=0;j<response.length;j++){
                                                // Delete Question image
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
                                        // Delete Sub Category image
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
                                // Delete Exam Type image
                                var data = {
                                    container : "edootech-exam-images",
                                    file : response[k].imageUrl
                                };
                                examServices.deleteImages(data).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                });
                                examServices.deleteExamType(response[k].id).then(function successCallback(response) {
                                    
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }
                        }, function errorCallback(response) {
                            return response;
                        });
                        // Delete Quiz/Subject image
                        var data = {
                            container : "edootech-quiz-images",
                            file : response[m].imageUrl
                        };
                        examServices.deleteImages(data).then(function successCallback(response) {
                        }, function errorCallback(response) {
                            return response;
                        });
                        subjectServices.deleteQuiz(response[m].id).then(function successCallback(response) {
                            
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                }, function errorCallback(response) {
                    return response;
                });
                educationServices.deleteEducation(id).then(function successCallback(response) {
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
            $scope.eduId = id;
            educationServices.getEducation(id).then(function successCallback(response) {
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
            $scope.edu = items;
            
            $scope.updateEducation = function (id) {
                var quizId = id;
                var educationData = {
                    id : id,
                    name : $scope.edu.name
                }
                educationServices.educationEdit(educationData).then(function successCallback(response) {
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

        $scope.changeEducationStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                educationServices.changeEducationStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                educationServices.changeEducationStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }
    });
