(function() {
    angular.module('usersEasyA+')
        .controller('bootCampExplainCtrl', ['$scope', 'quizzApi', '$routeParams', '$timeout', '$rootScope', '$location', 'bootcampApi',  '$route', bootCampExplainCtrl]);

    function bootCampExplainCtrl($scope, quizzApi, $routeParams, $timeout, $rootScope, $location, bootcampApi, $route) {
        var vm = this;
        
        bootcampApi.getUserBootcampId($routeParams.bId).then(function(scss1) {
            $scope.btcmpExplain = scss1.data;
            // console.log('$scope.btcmpExplain', $scope.btcmpExplain);

            $rootScope.bootcampResolvedId = $scope.btcmpExplain.id;
            $scope.btcmpExplain.userPuzzle = [];
            bootcampApi.getBootcampId(scss1.data.bootcampId).then(function(scss2) {
                $scope.bootcampTitle = scss2.data.title;
                $scope.QuestionImage = scss2.data.question.imageUrl;
                $scope.answerInstructions = scss2.data.question.instructions;
                //If answer is image show image tag function
                        var titleState = scss2.data.question.imageUrl;
                        $scope.titleSplt = titleState.split(".amazonaws.com");
                        $scope.spltTitleOption = $scope.titleSplt[0];
                        // console.log('spltTitleOption', $scope.spltTitleOption);
                        if($scope.spltTitleOption === 'https://edootech-question-images.s3'){
                        $scope.showQuesTitle = true;
                        } else {
                        $scope.showQuesTitle = false;
                        }
                
                if (scss1.data.playerAnswer) {
                    bootcampApi.getUserAnswer(scss1.data.playerAnswer).then(function(usrAns) {
                        $scope.btcmpExplain.userAnswer = usrAns.data.content;
                        //If answer is image show image tag function
                        var qstnState = $scope.btcmpExplain.userAnswer;
                        $rootScope.quesstate = $scope.btcmpExplain;
                        // console.log('quesstate', $scope.btcmpExplain);
                        $scope.qstnSplt = qstnState.split(".amazonaws.com");
                        $scope.spltQstnOption = $scope.qstnSplt[0];
                        if($scope.spltQstnOption === 'https://edootech-answers.s3'){
                        $scope.showAnswer = true;
                        } else {
                        $scope.showAnswer = false;
                        }
                    })
                    bootcampApi.getRightAnswer(scss2.data.questionId).then(function(rhtAns) {
                        $scope.btcmpExplain.rightAnswer = rhtAns.data[0].content;
                    })
                } else {
                    bootcampApi.getBootCampPuzzle(scss2.data.questionId).then(function(puzzle) {
                        $scope.btcmpExplain.rightPuzzle = puzzle.data;
                        //If answer is image show image tag function
                        var ansState = $scope.btcmpExplain.rightPuzzle[0].content;
                        $scope.ansSplt = ansState.split(".amazonaws.com");
                        $scope.spltAnsOption = $scope.ansSplt[0];
                        if($scope.spltAnsOption === 'https://edootech-answers.s3'){
                        $scope.showAnswer = true;
                        } else {
                        $scope.showAnswer = false;
                        }
                        for (i = 0; i < scss1.data.puzzleAnswer.length; i++) {
                            for (j = 0; j < puzzle.data.length; j++) {
                                if (scss1.data.puzzleAnswer[i] == puzzle.data[j].id) {
                                    $scope.btcmpExplain.userPuzzle.push(puzzle.data[j]);//For filtering user answers
                                }
                            }
                        }
                    });
                }
                // console.log('scss2.data', scss2.data);
                $rootScope.qstId = scss2.data.question.id;
                $scope.userId = localStorage.getItem('userId');
                // console.log('$scope.btcmpExplainid', $rootScope.bootcampResolvedId , $scope.btcmpExplain.qstId, $scope.userId);
                var mark_data = { userId: $scope.userId, bootcampResolvedId: $rootScope.bootcampResolvedId, questionId:$rootScope.qstId };
                // console.log('user_data', mark_data);
                // $scope.markResolved123 = function(){
                //     bootcampApi.sendMarkResolved(mark_data).then(function(success) {
                //         $rootScope.$broadcast('CallParentMethod', {});
                //         $rootScope.$broadcast('bootCountBody', {});
                //         // console.log('success', success);
                //         $location.path('/bootcamp-sedine');
                //         // $timeout(function() {
                //         //                 location.reload();
                //         //             }, 100);
                        
                //             }, function(error) {
                //                 console.log(error);
                //                     })
                // }
                $scope.btcmpExplain.qstName = scss2.data.question.name;
                $scope.btcmpExplain.solution = scss2.data.solution;
                //If answer is image show image tag function for solution
                var solutionState = $scope.btcmpExplain.solution;
                $scope.solutionState = $scope.btcmpExplain.solution;
                $scope.solutionSplt = solutionState.split(".amazonaws.com");
                $scope.spltSolutionOption = $scope.solutionSplt[0];
                
                if($scope.spltSolutionOption == 'https://edootech-bootcamp-images.s3'){
                $scope.showTitle= 0;
                } else {
                    // console.log('false');
                $scope.showTitle = 1;
                }
                $scope.btcmpExplain.tip = scss2.data.tip;
                //If answer is image show image tag function for tip
                var tipState = $scope.btcmpExplain.tip;
                $scope.tipSplt = tipState.split(".amazonaws.com");
                $scope.splttipOption = $scope.tipSplt[0];
                // console.log('$scope.splttipOption', $scope.splttipOption);
                if($scope.splttipOption == 'https://edootech-bootcamp-images.s3'){
                $scope.showTip = true;
                } else {
                $scope.showTip = false;
                }
                $scope.btcmpExplain.solution = scss2.data.solution;
                //If answer is image show image tag function for solution
                var solutionState = $scope.btcmpExplain.tip;
                $scope.solutionSplt = solutionState.split(".amazonaws.com");
                $scope.spltSolutionOption = $scope.solutionSplt[0];
                // console.log('$scope.splttipOption', $scope.splttipOption);
                if($scope.spltSolutionOption == 'https://edootech-bootcamp-images.s3'){
                $scope.showSolution = true;
                } else {
                $scope.showSolution = false;
                }
                $scope.btcmpExplain.theory = scss2.data.theory;
                // console.log ('teory', $scope.btcmpExplain.theory);
                //If answer is image show image tag function for theory
                var thoryState = $scope.btcmpExplain.theory;
                $scope.thorySplt = thoryState.split(".amazonaws.com");
                $scope.spltthoryOption = $scope.thorySplt[0];
                // console.log('$scope.spltthoryOption', $scope.spltthoryOption);
                if($scope.spltthoryOption == 'https://edootech-bootcamp-images.s3'){
                $scope.showTheory = true;
                } else {
                $scope.showTheory = false;
                }
                }, function(err1) {
                    console.log(err1);
                });
            }, function(err2) {
                console.log(err2);
            });
        
                    
        $scope.tryAgain = function(qId) {
            $location.path('/single-player-bootcamp').search({ qId: qId });
        }
        $scope.goBattle = function() {
            $location.path('/battle');
        }
        var quizList = [];
        quizzApi.getQuizzes()//For getting all quizes
            .then(function(success) {
                quizList = success.data;
                $scope.quizList = quizList;
                
                   
            }, function(error) {
                console.log(error);
            });
        $scope.randomOpponent = function(e) {
            $scope.randomDisable = true;
            $rootScope.$broadcast('singlePlayer', { quiz: quizList });
            
        };

    }

})();
