(function () {
  angular.module('usersEasyA+')
    .controller('singlePlayerCtrl', ['$scope',  '$rootScope' ,'$location', '$uibModal', '$routeParams', 'questionApi', 'userApi', 'answerApi', '$timeout', singlePlayerCtrl]);

    function singlePlayerCtrl( $scope, $rootScope, $location, $uibModal, $routeParams, questionApi, userApi, answerApi, $timeout) {

        if($rootScope.battleSubCategoryId == 'undefined' || $rootScope.battleSubCategoryId == null){
            $location.path('/single/player');
        }
        var questionIds = [];
        var SubCatId = $rootScope.battleSubCategoryId;
        var questionList = [];
        var roundCount = 0;
        var timeoutfunction;
        var winsound = new Audio('scripts/app/sound/win.mp3');
        var failsound = new Audio('scripts/app/sound/lose.mp3');
        $scope.usrPlrGmePoint = 0;

        getNextQuestion(SubCatId, questionIds); // Get first question

        function resetscore(){
            $scope.usrPlrGmePoint = 0;
            $scope.gameRoundNo = 0;
            roundCount = 0;
        }
        $scope.setActiveItem = function(val) { //For selecting choose one option
            $scope.activeItem = val;
            $scope.ansBtnEnable = false;
        };

        function getNextQuestion(battleSubCategoryId, questionIds){
            var timer;

            roundCount++;
            $scope.gameRoundNo = roundCount;
            questionApi.getQuestion(battleSubCategoryId, questionIds)//For getting questions
            .then(function(success) {
                questionList = success.data;
                if(questionList.round == 'undefined' || questionList.round == null){
                    singlePlayerEnd(battleSubCategoryId);
                }else{
                    if(questionList.round.question.questionTypeId == 1){
                        $scope.ansBtnEnable = true;
                    }else{
                        $scope.ansBtnEnable = false;
                    }
                    $scope.battleQuestion = questionList.round;
                    //If answer is image show image tag function
                    var stateCheck = $scope.battleQuestion.answers[0].content;
                    $scope.stateSplt = stateCheck.split(".amazonaws.com");
                    $scope.spltOption = $scope.stateSplt[0];
                    if ($scope.spltOption == 'https://edootech-answers.s3') {
                        $scope.showAnswer = true;
                    } else {
                        $scope.showAnswer = false;
                    }
                    //If answer is image show image tag function
                    var quesCheck = $scope.battleQuestion.question.imageUrl;
                    $scope.quesSplt = quesCheck.split(".amazonaws.com");
                    $scope.spltQuestion = $scope.quesSplt[0];
                    if ($scope.spltQuestion == 'https://edootech-question-images.s3') {
                        $scope.showQuestion = true;
                    } else {
                        $scope.showQuestion = false;
                    }
                    $scope.$broadcast('timer-reset');
                    $scope.$broadcast('timer-start');
                    $timeout.cancel(timeoutfunction);
                    timeoutfunction = $timeout(function() {
                        questionIds.push(questionList.round.question.id);
                        getNextQuestion($rootScope.battleSubCategoryId, questionIds); // Get next question
                    }, 119000);
                }
            }, function(error) {
                console.log(error);
            });
        }

        var userProimse = userApi.userDetails(); // Get user details
        userProimse.then(function(User) {
            $scope.userDetails = User.data[0];
        }, function(errorUser) {
            console.log(errorUser);
        });



        $scope.submitAnswerMultiPlayer = function(bQuestion, answerId) {
            questionIds.push(bQuestion.question.id);
            var roundData = {};
            if (bQuestion.question.questionTypeId == 1) { //For choose option
                roundData.answer = [];
                roundData.answer.push(answerId);
                var answerChoosed = roundData.answer;
            } else { //for sort option
                roundData.answer = [];
                angular.forEach(answerId, function(list) {
                    roundData.answer.push(list.id);
                });
                var answerChoosed = roundData.answer;
            }
            roundData.round = roundCount;
            var checkAnswer = {questionId:bQuestion.question.id,answer:answerChoosed,userId:$scope.userDetails.usersId};
            $scope.checkSinglePlayerAnswer(checkAnswer);
        }

        $scope.checkSinglePlayerAnswer = function(checkAnswer){
            answerApi.checkSinglePlayerAnswer(checkAnswer)//For checking answers
            .then(function(success) {
                if (success.data.result.answer == true) {
                    winsound.play();
                    $scope.usrPlrGmePoint = $scope.usrPlrGmePoint + success.data.result.points;
                } else {
                    failsound.play();
                }
                $rootScope.$broadcast('updateUsrPoints', {});
                getNextQuestion($rootScope.battleSubCategoryId, questionIds); // Get next question
            }, function(error) {
                console.log(error);
            });
        }

        function singlePlayerEnd(battleSubCategoryId) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/single_player_end.html',
                'controllerAs': 'correctAnswerCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                    $scope.editUserErr = false;
                    $scope.continuePlaying = function() {
                        $uibModalInstance.dismiss('Close');
                        resetscore();
                        $rootScope.battleSubCategoryId = battleSubCategoryId;
                        while (questionIds.length > 0) {
                            questionIds.pop();
                        }
                        getNextQuestion($rootScope.battleSubCategoryId, questionIds); // Get next question
                    };
                    $scope.nextCategory = function() {
                        $uibModalInstance.dismiss('Close');
                        $location.path('/single/player');
                    };
                }
            });
        }

        $scope.singlePlayerGiveup = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/single_player_giveup.html',
                'controllerAs': 'correctAnswerCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                    $scope.editUserErr = false;
                    $scope.yes = function() {
                        $uibModalInstance.dismiss('Close');
                        $location.path('/single/player');
                    };
                    $scope.no = function() {
                        $uibModalInstance.dismiss('Close');

                    };
                }
            });
        };
    }
})();
