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
    .controller('puzzleCtrl', function($scope, questionServices, examServices, Upload, $uibModal, $state, $stateParams, $window) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };
        $scope.eId = $stateParams.eId;
        $scope.eTid = $stateParams.eTid;
        $scope.sCid = $stateParams.sCid;
        $scope.qId = $stateParams.qId;
        $scope.qtId = $stateParams.qtId;

        $scope.textFilled = {};
        $scope.textAnsChoosed = {};
        $scope.children = [{id:1},{id:2},{id:3},{id:4},{id:5}];
        
        $scope.back = function(){
            $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
        }
        
        // Get theme name
        questionServices.getThemes().then(function(response){
           $scope.themes = response;
        });

        $scope.isEnabled = 1;
        $scope.$watch('themeSelect', function() {
            if($scope.themeSelect == null){
                $scope.isEnabled = $scope.isEnabled;
            }else{
                $scope.isEnabled = $scope.themeSelect;
            }
        });

        $scope.createQuestion = function(){
            console.log("Puzzle");
            var questionImage={
                container:"edootech-question-images",
                file : $scope.questionImage
            };
            if($scope.theme == null){
                $scope.themeId = $scope.themeSelect;
                console.log("old" ,$scope.themeId)
            }else{
                var data = {
                    name : $scope.theme
                };
                questionServices.themeCreate(data).then(function successCallback(response) {
                    $scope.themeId = response.id;
                    console.log("new",$scope.themeId)
                }, function errorCallback(response) {
                    return response;
                });
            }
            if($scope.questionImage == null){
                var data = {
                    name: $scope.questionName,
                    level11: $scope.level11,
                    instructions: $scope.Instruction,
                    imageUrl: $scope.description,
                    subCategoryId: $scope.sCid,
                    questionTypeId: $scope.qtId,
                    themeId: $scope.themeId
                };
                create_question(data);
            }else{
                questionServices.uploadImages(questionImage).then(function successCallback(response) {
                    var imageUrl = response.data.result.files.file[0].providerResponse.location;
                    var data = {
                        name:$scope.questionName,
                        level11:$scope.level11,
                        instructions : $scope.Instruction,
                        imageUrl: imageUrl,
                        quizId : $scope.qId,
                        subCategoryId: $scope.sCid,
                        questionTypeId: $scope.qtId,
                        themeId: $scope.themeId
                    };
                    create_question(data);
                }, function errorCallback(response) {
                    return response;
                });
            }
        }
        function create_question(data){
            questionServices.questionCreate(data).then(function successCallback(response) {
                var qId = response.id;
                $scope.textRecords = $.grep($scope.children, function( record ) {
                    return $scope.textFilled[ record.id ];
                });
                var i = 0;
                angular.forEach($scope.textFilled, function(ans, anskey) {
                    if(angular.isObject(ans)){
                        i++;
                        var ansDataFile = {
                            container:"edootech-answers",
                            file : ans,
                            index : i
                        } 
                        questionServices.uploadAnswerImages(ansDataFile).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var ansData = {
                                content : imageUrl,
                                correct : false,
                                order : anskey,
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
                            correct : false,
                            order : anskey,
                            questionId : qId
                        }
                        questionServices.answerCreate(ansData).then(function successCallback(response) {
                            console.log(response);
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                })
                if($scope.bootcampTitle != null){
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
                        if($scope.tipImage != null){
                            questionServices.uploadImages(tipImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title: $scope.bootcampTitle,
                                    tip: imageUrl,
                                    id: bId,
                                    questionId: qId
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                    console.log(response);
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        if($scope.solutionImage != null){
                            questionServices.uploadImages(solutionImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title: $scope.bootcampTitle,
                                    solution: imageUrl,
                                    id: bId,
                                    questionId: qId
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                    console.log(response);
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        if($scope.theoryImage != null){
                            questionServices.uploadImages(theoryImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title: $scope.bootcampTitle,
                                    theory: imageUrl,
                                    id: bId,
                                    questionId: qId
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                    console.log(response);
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
                    }, function errorCallback(response) {
                        return response;
                    });
                }
                window.history.back();
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
            "4",
            "5"
        ];
        $scope.tAnswers = [{ id: 1, name: "tOption1" }];


        //table row add remove function

        $scope.removeRow = function(index, content) {
            if (index != -1) {
                $scope.textFilled[index+1] = null;
                $scope.tAnswers.splice(index, 1);
                $scope.message = content + ' removed successfully.';
            }
        };

        $scope.add = function() {
            var c = 4;
            if (c >= $scope.tAnswers.length) {
                $scope.tAnswers.push({ id: "" + ($scope.tAnswers.length + 1) });
            }
        }

        $scope.pAnswers = [{ id: 1, name: "tOption1" }];

        $scope.removeRowPic = function(index, content) {
            if (index != -1) {
                $scope.textFilled[index+1] = null;
                $scope.pAnswers.splice(index, 1);
                $scope.message = content + ' removed successfully.';
            }
        };

        $scope.addPic = function() {
            var c = 4;
            if (c >= $scope.pAnswers.length) {
                $scope.pAnswers.push({ id: "" + ($scope.pAnswers.length + 1) });
            }
        }

    
    });
