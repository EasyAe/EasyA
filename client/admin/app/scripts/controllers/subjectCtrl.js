'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:quizCtrl 
 * @description
 * # quizCtrl
 * Controller of the minovateApp 
 */
app
    .controller('subjectCtrl', function($scope, subjectServices, examServices, subcategoryServices, Upload, $uibModal, $state, $stateParams, $window) {

        var key = '$LoopBack$accessTokenId';
        var accessToken = localStorage[key];
        
        $scope.eId = $stateParams.eId;

        $scope.back = function(){
            $window.location.href = '#/app/education';
        }

        $scope.page = {
            title: 'Profile Page',
            subtitle: 'Place subtitle here...'
        };
        // Get Quiz by education Id
        subjectServices.getEdQuiz($scope.eId).then(function(response){
            $scope.quizs = response;
        });

        // Get education name
        subjectServices.getEducation($scope.eId).then(function(response){
           $scope.education = response;
        });
        // Create New Quiz
        $scope.createQuiz = function(){
            var quizImageData = {
                container:"edootech-quiz-images",
                file : $scope.image
            }
            examServices.uploadImages(quizImageData).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var quiz = {
                    name : $scope.name,
                    imageUrl : imageUrl,
                    educationTypeId : $scope.eId
                }
                subjectServices.quizCreate(quiz).then(function successCallback(response) {
                    var id = response.id;
                    $state.reload(); 
                    // $window.location.href = '#/app/exam-type/'+$scope.eId+'/'+id;
                }, function errorCallback(response) {
                    return response;
                });
            }, function errorCallback(response) {
                return response;
            });
        }

        $scope.showDeleteModel = function(id){
            $scope.subId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'subjectDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.subId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.subId = items;
            $scope.ok = function (id) {
                subjectServices.getExamType(id).then(function successCallback(response) {
                    console.log(response);
                    for(var k=0;k<response.length;k++){
                        examServices.getSubCategory(response[k].id).then(function successCallback(response) {
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
                subjectServices.getQuiz(id).then(function successCallback(response) {
                    var data = {
                        container : "edootech-quiz-images",
                        file : response[0].imageUrl
                    };
                    console.log(data);
                    examServices.deleteImages(data).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
                subjectServices.deleteQuiz(id).then(function successCallback(response) {
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

        $scope.subjectEditModel = function(id){
            $scope.subId = id;
            subjectServices.getQuiz(id).then(function successCallback(response) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'subjectEditModel.html',
                    controller: QuizModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response[0];
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var QuizModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.sub = items;
            
            $scope.updateSubject = function (id) {
                var subId = id;
                
                if($scope.image != null){
                    subjectServices.getQuiz(id).then(function successCallback(response) {
                        var old_url = response[0].imageUrl.split("/")[3];
                        var old_filename = old_url.split(".")[0];
    	                var quizImageData = {
    	                    container:"edootech-quiz-images",
    	                    file : $scope.image,
                            old_filename : old_filename
    	                }
    	                examServices.overRideImages(quizImageData).then(function successCallback(response) {
    	                    var imageUrl = response.data.result.files.file[0].providerResponse.location;
    	                    var quizData = {
    	                        id : id,
    	                    	name : $scope.sub.name,
    	                        imageUrl: imageUrl,
                                educationTypeId : $scope.eId
    	                    }
    	                    subjectServices.quizUpdate(quizData).then(function successCallback(response) {
    		                    $uibModalInstance.close();
    		                    $state.reload();
    		                }, function errorCallback(response) {
    		                    return response;
    		                });
    	                }, function errorCallback(response) {
    	                    return response;
    	                });
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
	            }else{
	            	var quizData = {
                        id : id,
                    	name : $scope.sub.name,
                        educationTypeId : $scope.eId
                    }
                    subjectServices.quizUpdate(quizData).then(function successCallback(response) {
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

        $scope.changeQuizStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    active : false
                }
                subjectServices.changeQuizStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    active : true
                }
                subjectServices.changeQuizStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }
    });