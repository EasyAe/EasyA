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
    .controller('filleditCtrl', function($scope, questionServices, examServices, Upload, $uibModal, $state, $stateParams) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };
        $scope.qId = $stateParams.qId;
        
        $scope.textFilled = {};
        $scope.textAnsChoosed = {};
        $scope.pictureAnsChoosed = {};
        $scope.children = [{id:1},{id:2},{id:3},{id:4}];

        questionServices.getQuestion($scope.qId).then(function successCallback(response) {
            $scope.question = response;
        }, function errorCallback(response) {
            return response;
        });

        questionServices.getBootcamp($scope.qId).then(function successCallback(response) {
            // console.log(response);
            $scope.bootcamp = response[0];
            $scope.bId = $scope.bootcamp.id;
        }, function errorCallback(response) {
            return response;
        });
        
        $scope.checkUrl = function isURL(str) {
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            if(pattern.test(str) == true){
                $scope.content = "other";
            }
            return pattern.test(str);
        }


        $scope.editQuestion = function(id){
            if($scope.content =="other"){
                console.log($scope.content);
                console.log($scope.question);
                console.log($scope.pictureAnsChoosed);
                $scope.textRecords = $.grep($scope.question.answers, function(record) {
                    return $scope.textFilled[record.id] = record.correct;
                });
                console.log($scope.textFilled);
                angular.forEach($scope.pictureAnsChoosed, function(ans, anskey) {
                    angular.forEach($scope.textFilled, function(corr, corrkey) {
                        if (anskey == corrkey) {
                            console.log(ans, corr)
                            if (angular.isObject(ans)) {
                                var ansDataFile = {
                                    container: "edootech-answers",
                                    file: ans
                                }
                                console.log(anskey);
                                questionServices.uploadImages(ansDataFile).then(function successCallback(response) {
                                    var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                    var ansData = {
                                        content: imageUrl,
                                        correct: corr,
                                        order: 0,
                                        id:anskey,
                                        questionId: id
                                    }
                                    questionServices.answerEdit(ansData).then(function successCallback(response) {
                                        console.log(response);
                                    }, function errorCallback(response) {
                                        return response;
                                    });
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }else{
                                var ansData = {
                                    correct: corr,
                                    order: 0,
                                    id:anskey,
                                    questionId: id
                                }
                                console.log("no image ans edit");
                                questionServices.answerUpdate(ansData).then(function successCallback(response) {
                                    console.log(response);
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }
                        }
                    })
                })
            }else{
                console.log("text");
                angular.forEach($scope.question.answers, function(ans, anskey) {
                    var ansData = {
                        content: ans.content,
                        correct: ans.correct,
                        order: ans.order,
                        id:ans.id,
                        questionId: ans.questionId
                    }
                    questionServices.answerEdit(ansData).then(function successCallback(response) {
                        console.log(response);
                    }, function errorCallback(response) {
                        return response;
                    });
                })
            }
            if($scope.questionImage != null){
                var questionImage={
                    container:"edootech-question-images",
                    file : $scope.questionImage
                };
                questionServices.uploadImages(questionImage).then(function successCallback(response) {
                    var imageUrl = response.data.result.files.file[0].providerResponse.location;
                    var data = {
                        name:$scope.question.name,
                        level11:$scope.question.level11,
                        active:true,
                        instructions : $scope.question.instructions,
                        imageUrl: imageUrl,
                        id : id,
                        quizId : $scope.question.quizId,
                        questionTypeId : $scope.question.questionTypeId
                    };
                    questionServices.questionUpdate(data).then(function successCallback(response) {
                        if($scope.tipImage != null){
                            var tipImage ={
                                container:"edootech-bootcamp-images",
                                file : $scope.tipImage
                            };
                            questionServices.uploadImages(tipImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title : $scope.bootcamp.title,
                                    tip : imageUrl,
                                    id : $scope.bId,
                                    questionId : id
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                });
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        if($scope.solutionImage != null){
                            var solutionImage={
                                container:"edootech-bootcamp-images",
                                file : $scope.solutionImage
                            };
                            questionServices.uploadImages(solutionImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title : $scope.bootcamp.title,
                                    solution : imageUrl,
                                    id : $scope.bId,
                                    questionId : id
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                })
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        if($scope.theoryImage != null){
                            var theoryImage={
                                container:"edootech-bootcamp-images",
                                file : $scope.theoryImage
                            };
                            questionServices.uploadImages(theoryImage).then(function successCallback(response) {
                                var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                var bootcampEditData = {
                                    title : $scope.bootcamp.title,
                                    theory : imageUrl,
                                    id : $scope.bId,
                                    questionId : id
                                }
                                questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                }, function errorCallback(response) {
                                    return response;
                                })
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        var bootcampEditData = {
                            title : $scope.bootcamp.title,
                            tip : $scope.tipImageEdit,
                            solution : $scope.solutionImageEdit,
                            theory : $scope.theoryImageEdit,
                            id : $scope.bId,
                            questionId : id
                        }
                        questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                        }, function errorCallback(response) {
                            return response;
                        })
                        window.history.back();
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
            }else{
                var data = {
                    name:$scope.question.name,
                    level11:$scope.question.level11,
                    active:true,
                    instructions : $scope.question.instructions,
                    id : id,
                    quizId : $scope.quizId,
                    questionTypeId : $scope.qtId
                };
                questionServices.questionUpdate(data).then(function successCallback(response) {
                    if($scope.tipImage != null){
                        var tipImage ={
                            container:"edootech-bootcamp-images",
                            file : $scope.tipImage
                        };
                        questionServices.uploadImages(tipImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcamp.title,
                                tip : imageUrl,
                                id : $scope.bId,
                                questionId : id
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                            }, function errorCallback(response) {
                                return response;
                            })
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                    if($scope.solutionImage != null){
                        var solutionImage={
                            container:"edootech-bootcamp-images",
                            file : $scope.solutionImage
                        };
                        questionServices.uploadImages(solutionImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcamp.title,
                                solution : imageUrl,
                                id : $scope.bId,
                                questionId : id
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                            }, function errorCallback(response) {
                                return response;
                            })
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                    if($scope.theoryImage != null){
                        var theoryImage={
                            container:"edootech-bootcamp-images",
                            file : $scope.theoryImage
                        };
                        questionServices.uploadImages(theoryImage).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var bootcampEditData = {
                                title : $scope.bootcamp.title,
                                theory : imageUrl,
                                id : $scope.bId,
                                questionId : id
                            }
                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                            }, function errorCallback(response) {
                                return response;
                            })
                        }, function errorCallback(response) {
                            return response;
                        });
                    }
                    var bootcampEditData = {
                        title : $scope.bootcamp.title,
                        tip : $scope.tipImageEdit,
                        solution : $scope.solutionImageEdit,
                        theory : $scope.theoryImageEdit,
                        id : $scope.bId,
                        questionId : id
                    }
                    questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                    }, function errorCallback(response) {
                        return response;
                    });
                    window.history.back();
                }, function errorCallback(response) {
                    return response;
                });
            }
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

      $scope.answers = [
          "Drag the sentences in the correct order",
          "Pull the equations in place, so the result fits",
          "Create more in the admin panel"
      ];

    
    });
