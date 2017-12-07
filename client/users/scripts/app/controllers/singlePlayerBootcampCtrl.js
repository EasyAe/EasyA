(function() {
    angular.module('usersEasyA+')
        //RANDOM QUOTY
        .filter('shuffle', function() {
            var shuffledArr = [],
                shuffledLength = 0;
            return function(arr) {
                console.log(arr);
                var o = arr.slice(0, arr.length);
                if (shuffledLength == arr.length) return shuffledArr;
                for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                shuffledArr = o;
                //shuffledLength = o.length;
                return o;
            };

        })
        .controller('singlePlayerBootcampCtrl', singlePlayerBootcampCtrl);

    function singlePlayerBootcampCtrl($scope, $location, $uibModal, $routeParams, bootcampApi, $rootScope, $filter, $http, $timeout) {
        // console.log($routeParams.qId);
        // $scope.go = function ( path ) {
        //  $location.path( path );
        // };
        // var vm = this;

        var qid = $routeParams.qId;
        $scope.qeid = $routeParams.qId;
        var currentStatus = {
            "where": { "id": qid },
            "include": { "relation": "answers", "scope": { "fields": ["content", "id"] } }
        };


        $scope.quotes = [];
        bootcampApi.getSingleAnswer(currentStatus).then(function(puzzle) {

            $scope.usrQuestions = puzzle.data[0];
            // console.log('$scope.usrQuestions', $scope.usrQuestions.answers);
            $scope.quotes = $scope.usrQuestions.answers;
            // console.log('testing new');
            $scope.quotes = $filter('shuffle')($scope.quotes);
            // console.log('$scope.usrQuestions.answer', $scope.quotes);
            //filter if usrQuestions has image
            var usrQuesCheck = $scope.usrQuestions.imageUrl;
            // console.log('usrQuesCheck', usrQuesCheck);
            $scope.usrQuesSplt = usrQuesCheck.split(".amazonaws.com");
            $scope.spltOption = $scope.usrQuesSplt[0];
            if ($scope.spltOption == 'https://edootech-question-images.s3') {
                $scope.showQuestion = true;
            } else {
                $scope.showQuestion = false;
            }
            //filter if usranswers has image
            var usrAnsCheck = $scope.usrQuestions.answers[0].content;
            // console.log('usrAnsCheck', usrAnsCheck);
            $scope.usrAnsSplt = usrAnsCheck.split(".amazonaws.com");
            $scope.spltAnsOption = $scope.usrAnsSplt[0];
            if ($scope.spltAnsOption == 'https://edootech-answers.s3') {
                $scope.showAnswer = true;
            } else {
                $scope.showAnswer = false;
            }
        });
        
        function endeligtSvar() {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                keyboard  : false,
                templateUrl: 'scripts/app/views/modals/correct_answer.html',
                'controllerAs': 'correctAnswerCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                    $scope.editUserErr = false;
                    $scope.backToBootcamp = function() {
                        $uibModalInstance.dismiss('Close');
                        $location.path('/bootcamp');
                    };
                    $scope.nextQuestion = function() {
                        $uibModalInstance.dismiss('Close');
                        $location.path('/bootcamp-sedine');
                    };
                }
            });
        };

        function playAgainFunc() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/wrong_answer.html',
                'controllerAs': 'wrongAnswerCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                    $scope.playAgain = function() {
                        $uibModalInstance.dismiss('Close');
                        $location.path('/bootcamp-sedine');
                    };
                }
            });
        };
        $scope.ansBtnEnable = true;
        $scope.usrPlrGmePoint = 0;
        $scope.setActiveItem = function(val) { //For selecting choose one option
            $scope.activeItem = val;
            $scope.ansBtnEnable = false;
        };
        $scope.givUp = function() {
            $location.path('/bootcamp-sedine');
        };
        $scope.submitAnswerCheck = function(quesid, usrid, activeItem, typeId) {
            $scope.questionId = quesid;
            $scope.usrId = usrid;
            if (typeId == 2) {
                $scope.activeItem = activeItem;
                var answerArray = [];
                var i;
                for (i = 0; i < $scope.activeItem.length; i++) {
                    answerArray.push($scope.activeItem[i].id)
                }
            } else {
                var answerArray = activeItem;
            }


            // console.log('sdasdsd', $scope.usrId, $rootScope.bootcampResolvedId, $rootScope.qstId);
            var mark_data = { userId: $scope.usrId, bootcampResolvedId: $rootScope.bootcampResolvedId, questionId: $rootScope.qstId };

            function markResolved() {
                bootcampApi.sendMarkResolved(mark_data).then(function(success) {
                    $rootScope.$broadcast('CallParentMethod', {});
                    $rootScope.$broadcast('bootCountBody', {});
                    $rootScope.$broadcast('updateUsrPoints', {});
                    // $location.path('/bootcamp-sedine');
                    // $timeout(function() {
                    //                 location.reload();
                    //             }, 100);

                }, function(error) {
                    console.log(error);
                })
            }
            // var answerArray = [];

            // var i;

            // for(i=0; i < $scope.answrId.length; i++){
            //   if($scope.answrId[i].questionId === 128){
            //     answerArray.push($scope.answrId[i].id);
            //   }
            // }

            // console.log('quesid', quesid);
            // console.log('usrid', usrid);
            // console.log('activeItem', answerArray);
            bootcampApi.getAnswerCheck(quesid, answerArray, usrid).then(function(success) {
                // console.log('sdata', success.data.result.points)
                if (success.data.result.answer === true) {
                    // console.log('function success');
                    // $scope.usrPlrGmePoint = success.data.result.points;
                    markResolved();
                    endeligtSvar();
                    $rootScope.$broadcast('updateUsrPoints', {});
                } else {
                    playAgainFunc();
                }
                // endeligtSvar();
            }, function(error) {
                console.log(error);
            });
        }

    }
})();
