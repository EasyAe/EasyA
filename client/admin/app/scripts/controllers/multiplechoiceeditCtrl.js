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
    .controller('multiplechoiceeditCtrl', function($scope, questionServices, examServices, Upload, $uibModal, $state, $stateParams, $window, $timeout) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };
        $scope.eId = $stateParams.eId;
        $scope.eTid = $stateParams.eTid;
        $scope.sCid = $stateParams.sCid;
        $scope.qId = $stateParams.qId;
        $scope.qsId = $stateParams.qsId;
        $scope.qtId = $stateParams.qtId;
        
        $scope.textFilled = {};
        $scope.textAnsChoosed = {};
        $scope.pictureAnsChoosed = {};
        $scope.children = [{id:1},{id:2},{id:3},{id:4}];

        $scope.back = function(){
            $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
        }
        
        // Get theme name
        questionServices.getThemes().then(function(response){
           $scope.themes = response;
        });

        $scope.isEnabled = 1;
        $scope.$watch('question.themeId', function() {
            if($scope.question.themeId == null){
                $scope.isEnabled = 0;
            }else{
                $scope.isEnabled = $scope.question.themeId;
            }
        });

        questionServices.getQuestion($scope.qsId).then(function successCallback(response) {
            $scope.question = response;
            $scope.image = response.imageUrl;
            $scope.ans = response.answers[0].content;
            console.log($scope.image);
        }, function errorCallback(response) {
            return response;
        });
        $scope.init =function() {
            $timeout(function() {
                console.log("timeout");
                QcheckUrl($scope.image);
                checkUrl($scope.ans);
            }, 4000);
        }
        questionServices.getBootcamp($scope.qsId).then(function successCallback(response) {
            // console.log(response);
            $scope.bootcamp = response[0];
            $scope.bId = $scope.bootcamp.id;
        }, function errorCallback(response) {
            return response;
        });

        function checkUrl(url) {
            var text = url;
           var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
           if(regexp.test(text) == true){
                $scope.content = "other";
                console.log("true");
            }else{
                console.log("false");
                $scope.content = "first";
            }
           return regexp.test(text);
        }

        function QcheckUrl(url) {
            var text = url;
           var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
           if(regexp.test(text) == true){
                $scope.Qswap = "Qfirst";
                console.log("true");
            }else{
                console.log("false");
                $scope.Qswap = "Qother";
            }
           return regexp.test(text);
        }
        

        $scope.editQuestion = function(id){
            $scope.answerCorrect = 0;
            $scope.textRecords = $.grep($scope.question.answers, function(record) {
                console.log(record.correct);
                if (record.correct == false) {
                    return $scope.answerCorrect;
                } else {
                    return $scope.answerCorrect++;
                }
            });
            console.log("Answer count ", $scope.answerCorrect);
            if($scope.answerCorrect ==1){
                if($scope.theme == null){
                    $scope.themeId = $scope.question.themeId;
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
                if($scope.content =="other"){
                    console.log($scope.content);
                    console.log($scope.question);
                    console.log($scope.pictureAnsChoosed);
                    $scope.textRecords = $.grep($scope.question.answers, function(record) {
                        return $scope.textFilled[record.id] = record.correct;
                    });
                    console.log($scope.textFilled);
                    angular.forEach($scope.textFilled, function(corr, corrkey) {
                        var ansCorrect = {
                            id : corrkey,
                            correct : corr
                        }
                        questionServices.answerCorrectUpdate(ansCorrect).then(function successCallback(response) {
                            console.log(response);
                        }, function errorCallback(response) {
                            return response;
                        });
                    })
                    var i = 0;
                    angular.forEach($scope.pictureAnsChoosed, function(ans, anskey) {
                        angular.forEach($scope.textFilled, function(corr, corrkey) {
                            if (anskey == corrkey) {
                                console.log(ans, corr)
                                if (angular.isObject(ans)) {
                                    i++;
                                    var ansDataFile = {
                                        container: "edootech-answers",
                                        file: ans,
                                        index : i
                                    }
                                    console.log(anskey);
                                    questionServices.uploadAnswerImages(ansDataFile).then(function successCallback(response) {
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
                    questionServices.getQuestionById(id).then(function successCallback(response) {
                        console.log(response)
                        if(checkUrl(response.imageUrl)){
                        // Delete Question image
                            var old_url = response.imageUrl.split("/")[3]; 
                            var old_filename = old_url.split(".")[0];
                        }else{
                            var old_filename = new Date().getTime()+'.' + $scope.questionImage.name.split(".")[1];
                        }
                        var data = {
                            container : "edootech-question-images",
                            file : $scope.questionImage,
                            old_filename : old_filename
                        };
                        examServices.overRideImages(data).then(function successCallback(response) {
                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                            var data = {
                                name:$scope.question.name,
                                level11:$scope.question.level11,
                                instructions : $scope.question.instructions,
                                imageUrl: imageUrl,
                                id : id,
                                questionTypeId : $scope.question.questionTypeId,
                                subCategoryId: $scope.sCid,
                                themeId: $scope.themeId
                            };
                            questionServices.questionUpdate(data).then(function successCallback(response) {
                                if($scope.bId != null){    
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
                                }else{
                                    var tipImage = {
                                        container: "edootech-bootcamp-images",
                                        file: $scope.tipImage
                                    };
                                    var solutionImage = {
                                        container: "edootech-bootcamp-images",
                                        file: $scope.solutionImage
                                    };
                                    var theoryImage = {
                                        container: "edootech-bootcamp-images",
                                        file: $scope.theoryImage
                                    };
                                    var bootcampData = {
                                        title: $scope.bootcamp.title,
                                        tip: "string",
                                        solution: "string",
                                        theory: "string",
                                        questionId: qsId
                                    }
                                    questionServices.bootcampCreate(bootcampData).then(function successCallback(response) {
                                        var bId = response.id;
                                        questionServices.uploadImages(tipImage).then(function successCallback(response) {
                                            var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                            var bootcampEditData = {
                                                title: $scope.bootcampTitle,
                                                tip: imageUrl,
                                                id: bId,
                                                questionId: qsId
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
                                                title: $scope.bootcampTitle,
                                                solution: imageUrl,
                                                id: bId,
                                                questionId: qsId
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
                                                title: $scope.bootcampTitle,
                                                theory: imageUrl,
                                                id: bId,
                                                questionId: qsId
                                            }
                                            questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                                console.log(response);
                                            }, function errorCallback(response) {
                                                return response;
                                            });
                                        }, function errorCallback(response) {
                                            return response;
                                        });
                                        $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
                                    }, function errorCallback(response) {
                                        return response;
                                    });
                                }
                                $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
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
                    var data = {
                        name:$scope.question.name,
                        level11:$scope.question.level11,
                        instructions : $scope.question.instructions,
                        imageUrl: $scope.question.imageUrl,
                        id : id,
                        questionTypeId : $scope.qtId,
                        subCategoryId: $scope.sCid,
                        themeId: $scope.themeId
                    };
                    questionServices.questionUpdate(data).then(function successCallback(response) {
                        if($scope.bId != null){
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
                        }else{
                            console.log("Not null");
                            var tipImage = {
                                container: "edootech-bootcamp-images",
                                file: $scope.tipImage
                            };
                            var solutionImage = {
                                container: "edootech-bootcamp-images",
                                file: $scope.solutionImage
                            };
                            var theoryImage = {
                                container: "edootech-bootcamp-images",
                                file: $scope.theoryImage
                            };
                            var bootcampData = {
                                title: $scope.bootcamp.title,
                                tip: "string",
                                solution: "string",
                                theory: "string",
                                questionId: id
                            }
                            questionServices.bootcampCreate(bootcampData).then(function successCallback(response) {
                                var bId = response.id;
                                questionServices.uploadImages(tipImage).then(function successCallback(response) {
                                    var imageUrl = response.data.result.files.file[0].providerResponse.location;
                                    var bootcampEditData = {
                                        title: $scope.bootcampTitle,
                                        tip: imageUrl,
                                        id: bId,
                                        questionId: id
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
                                        title: $scope.bootcampTitle,
                                        solution: imageUrl,
                                        id: bId,
                                        questionId: id
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
                                        title: $scope.bootcampTitle,
                                        theory: imageUrl,
                                        id: bId,
                                        questionId: id
                                    }
                                    questionServices.bootcampUpdate(bootcampEditData).then(function successCallback(response) {
                                        console.log(response);
                                    }, function errorCallback(response) {
                                        return response;
                                    });
                                }, function errorCallback(response) {
                                    return response;
                                });
                                $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
                            }, function errorCallback(response) {
                                return response;
                            });
                        }
                        $window.location.href = '#/app/question/'+$scope.eId+'/'+$scope.qId+'/'+$scope.eTid+'/'+$scope.sCid;
                    }, function errorCallback(response) {
                        return response;
                    });
                }
            }else{
                $scope.answerError = "Please choose atleast one correct answer";
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
    });
