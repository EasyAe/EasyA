'use strict';
var uid = 1;
/**
 * @ngdoc function
 * @name minovateApp.controller:examCtrl
 * @description
 * # examCtrl
 * Controller of the minovateApp
 */
app
    .controller('fillCtrl', function($scope, questionServices, examServices, Upload, $uibModal, $state, $stateParams) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };
        $scope.quizId = $stateParams.quizId;
        $scope.qtId = $stateParams.qtId;

        $scope.textFilled = {};
        $scope.textAnsChoosed = {};
        $scope.children = [{id:1},{id:2},{id:3},{id:4}];
        
        $scope.createQuestion = function(){
            var questionImage={
                container:"edootech-question-images",
                file : $scope.questionImage
            };
            questionServices.uploadImages(questionImage).then(function successCallback(response) {
                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                var data = {
                    name:$scope.questionName,
                    level11:$scope.level11,
                    active:true,
                    instructions : $scope.Instruction,
                    imageUrl: imageUrl,
                    quizId : $scope.quizId,
                    questionTypeId : $scope.qtId
                };
                questionServices.questionCreate(data).then(function successCallback(response) {
                    var qId = response.id;
                    $scope.textRecords = $.grep($scope.children, function( record ) {
                        return $scope.textFilled[ record.id ];
                    });
                    $scope.textRecords = $.grep($scope.children, function( record ) {
                        if($scope.textAnsChoosed[ record.id ]==null || $scope.textAnsChoosed[ record.id ]=="undefined"){
                            return $scope.textAnsChoosed[ record.id ] = false;
                        }else{
                            return $scope.textAnsChoosed[ record.id ];
                        }
                    });
                    angular.forEach($scope.textFilled, function(ans, anskey) {
                        angular.forEach($scope.textAnsChoosed, function(corr, corrkey) {
                            if(anskey == corrkey){
                                console.log(ans, corr)
                                if(angular.isObject(ans)){
                                    var ansDataFile = {
                                        container:"edootech-answers",
                                        file : ans
                                    }
                                    questionServices.uploadImages(ansDataFile).then(function successCallback(response) {
                                        var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                        var ansData = {
                                            content : imageUrl,
                                            correct : corr,
                                            order : 0,
                                            questionId : qId
                                        }
                                        questionServices.answerCreate(ansData).then(function successCallback(response) {
                                            console.log(response);
                                        }, function errorCallback(response) {
                                            return response;
                                        });
                                    }, function errorCallback(response) {
                                        return response;
                                    });
                                }else{
                                    var ansData = {
                                        content : ans,
                                        correct : corr,
                                        order : 0,
                                        questionId : qId
                                    }
                                    questionServices.answerCreate(ansData).then(function successCallback(response) {
                                        console.log(response);
                                    }, function errorCallback(response) {
                                        return response;
                                    });
                                }
                            }
                        })
                    })
                    var tipImage ={
                        container:"edootech-bootcamp-images",
                        file : $scope.tipImage
                    };
                    var solutionImage={
                        container:"edootech-bootcamp-images",
                        file : $scope.solutionImage
                    };
                    var theoryImage={
                        container:"edootech-bootcamp-images",
                        file : $scope.theoryImage
                    };
                    var bootcampData = {
                        title : $scope.bootcampTitle,
                        tip : "string",
                        solution : "string",
                        theory : "string",
                        questionId : qId
                    }
                    questionServices.bootcampCreate(bootcampData).then(function successCallback(response) {
                        var bId = response.id;
                        questionServices.uploadImages(tipImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcampTitle,
                                tip : imageUrl,
                                id : bId,
                                questionId : qId
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                console.log(response);
                            }, function errorCallback(response) {
                                return response;
                            });
                        }, function errorCallback(response) {
                            return response;
                        });
                        questionServices.uploadImages(solutionImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcampTitle,
                                solution : imageUrl,
                                id : bId,
                                questionId : qId
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                console.log(response);
                            }, function errorCallback(response) {
                                return response;
                            });
                        }, function errorCallback(response) {
                            return response;
                        });
                        questionServices.uploadImages(theoryImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcampTitle,
                                theory : imageUrl,
                                id : bId,
                                questionId : qId
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                console.log(response);
                            }, function errorCallback(response) {
                                return response;
                            });
                        }, function errorCallback(response) {
                            return response;
                        });
                        window.history.back();
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
            }, function errorCallback(response) {
                return response;
            });
        }
        $scope.options = [
        {
            value: '10 forskellige grene/discipliner ',
        },{
            value: 'Ligninger.',
        }, {
            value: 'Andengradspolynomiet.',
        }, {
            value: 'Lineaer vaekst.',
        }, {
            value: 'Eksponentiel vaekst.',
        }, {
            value: 'Differential og integralregning.',
        }, {
            value: 'Geometri.',
        }, {
            value: 'Rentesregning.',
        }, {
            value: 'Bogstavregning.',
        }, {
            value: 'At spotte graf for et udtryk.',
        }, {
            value: 'Andengradsligningen.',
        }];

        $scope.numbers = [
            "1",
            "2",
            "3",
            "4"
        ];
        $scope.tAnswers = [{ id: 1, name: "tOption1" }];


        //table row add remove function

        $scope.removeRow = function(index, content) {
            if (index != -1) {
                $scope.tAnswers.splice(index, 1);
                $scope.message = content + ' removed successfully.';
            }
        };

        $scope.add = function() {
            var c = 3;
            if (c >= $scope.tAnswers.length) {
                $scope.tAnswers.push({ id: "" + ($scope.tAnswers.length + 1) });
            }
        }

        $scope.pAnswers = [{ id: 1, name: "tOption1" }];

        $scope.removeRowPic = function(index, content) {
            if (index != -1) {
                $scope.pAnswers.splice(index, 1);
                $scope.message = content + ' removed successfully.';
            }
        };

        $scope.addPic = function() {
            var c = 3;
            if (c >= $scope.pAnswers.length) {
                $scope.pAnswers.push({ id: "" + ($scope.pAnswers.length + 1) });
            }
        }

    
    });
