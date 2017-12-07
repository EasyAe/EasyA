(function() {
    angular.module('usersEasyA+')
    
    .controller('battleController', ['$scope', '$rootScope', '$location', 'battleApi', '$uibModal', 'quizzApi', '$cookieStore','$routeParams', 'userApi', battleController]);

    function battleController($scope, $rootScope, $location, battleApi, $uibModal, quizzApi, $cookieStore, $routeParams,userApi) {

        // $scope.WriteCookie = function () {
        //         $cookieStore.put("Name", $scope.Name);

        //     };
        // $scope.RemoveCookie = function () {
        //         $cookieStore.remove('remember_user');
        // };
        $rootScope.gameType = $routeParams.type;
        var quizList = [];
        quizzApi.getQuizzes()//For getting all quizes
            .then(function(success) {
                quizList = success.data;
                $scope.quizList = quizList;
                // console.log('quizlist-battle', quizList);
                   
            }, function(error) {
                console.log(error);
            });

        // battleApi.getSubjects()
        //     .then(function(success) {
        //         $scope.battleSubjects = success.data;
        //     }, function(error) {
        //         console.log(error);
        //     });

        var battleTypes = [];
        battleApi.getBattleTypes()
            .then(function(success) {
                battleTypes = success.data;
                $scope.battleTypes = battleTypes;
                // console.log('battleType', $scope.battleTypes);
            }, function(error) {
                console.log(error);
            });
        var subCategories = [];    
        battleApi.getSubCategories()
            .then(function(success) {
                subCategories = success.data;
                $scope.subCategories = subCategories;
                // console.log('subCategories', subCategories);
            }, function(error) {
                console.log(error);
        });    
        $scope.subject = true;
        $scope.type = false;
        $scope.category = false;
        $scope.battleSubject = function() {
            $scope.subject = true;
            $scope.type = false;
            $scope.category = false;
        }
        $scope.battleType = function() {
            $scope.subject = false;
            $scope.type = true;
            $scope.category = false;
        }
        $scope.battleCategory = function() {
            $scope.subject = false;
            $scope.type = false;
            $scope.category = true;
        }
        $scope.go = function(path) {
            $location.path(path);
            // $(".modal-backdrop").hide();
            // $("body").attr("class","modal-close");
            // $("body").attr("style","padding-right:0px;");

        };

        

        $scope.selectSubject = function(educationId) {
            $rootScope.battleEducationId = educationId;
            // console.log('$rootScope.battleEducationId', $rootScope.battleEducationId);
            $scope.battleTypeFilter = function(data) {//battleType filter
              for(i=0;i<quizList.length;i++){

                 if($rootScope.battleEducationId == quizList[i].id && data.quizId == quizList[i].id){
                    return true;
                    break;                        
                 }
              }
            }
        }
        $scope.selectBattleType = function(typeId) {
            $rootScope.battleExamTypeId = typeId;
             $scope.subCategoryFilter = function(data) {//battleType filter
              for(i=0;i<subCategories.length;i++){
                 if($rootScope.battleExamTypeId == subCategories[i].examTypeId){
                    return true;
                    break;
                 }
              }
            }
        }
        $scope.selectSubCategory = function(subCategoryId) {
            $rootScope.battleSubCategoryId = subCategoryId;
            console.log('subCategoryId', subCategoryId);
        }

        $scope.lists = [
            { rank: '1', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '2', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '3', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '4', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '5', image: './assets/images/pers.png', name: 'Martin k', institute: 'None', position: 'Student', score: '2300' },
            { rank: '6', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '7', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '8', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '9', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '10', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '11', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' },
            { rank: '12', image: './assets/images/pers.png', name: 'Martin k', institute: 'Fredrick High School', position: 'Student', score: '2300' }
        ];

        $scope.chooseOpponent = function() {
            if($rootScope.gameType == "player"){ // Single Player
                $scope.randomDisable = false;
                $scope.alreadyInGame = false;
                $scope.editUserErr = false;
                $location.path('/single-player');
            }else{ // Multiple Player
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'scripts/app/views/modals/choose-opponent.html',
                    'controllerAs': 'opponentCtrl',
                    windowClass: 'my-modal-popup',
                    size: 'lg',
                    controller: function($uibModalInstance, $scope, $rootScope, $location) {
                        $scope.editUserErr = false;
                        $scope.randomDisable = false;
                        $scope.alreadyInGame = false;
                        $scope.randomOpponent = function(e) {
                            $scope.randomDisable = true;
                            $rootScope.$broadcast('randomOpponent', { quiz: quizList });
                            e.stopPropagation();
                            e.preventDefault();
                        };
                        $scope.$on('closeOppModal', function() { //For closing opponent modal
                            $uibModalInstance.dismiss('close');
                            $location.path('/opponent'); //Redirecting to opponent view for viewing opponent
                        });
                        $scope.$on('alreadyInGame', function(event, message) { //For showing error message for game
                           $scope.$apply(function(){
                                $scope.alreadyInGame = true;
                                $scope.alreadyInGameError = message;
                           });
                        });
                        $scope.family = false;
                        $scope.showDiv = function() {
                            $scope.family = $scope.family ? false : true;
                        };
                        $scope.modalClose = function() {
                            $uibModalInstance.dismiss('Close');
                        }
                        var allUserProimse = userApi.allUserDetails();
                        allUserProimse.then(function(User) {
                            $scope.allUserDetails = User.data;
                        }, function(errorUser) {
                            console.log(errorUser);
                        });
                        $scope.challenge = function(usersId) {
                            $uibModalInstance.dismiss('Close');
                            var modalInstance = $uibModal.open({
                                animation: true,
                                templateUrl: 'scripts/app/views/modals/choose-battlefriend.html',
                                'controllerAs': 'opponentfrinCtrl',
                                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                                    $scope.editUserErr = false;
                                    $scope.randomDisable = false;
                                    $scope.alreadyInGame = false;
                                    var userProimseBattleFriend = userApi.userDetailsBattleFriend(usersId);
                                    userProimseBattleFriend.then(function(User) {
                                        $scope.userBattleFriendDetails = User.data[0];
                                    }, function(errorUser) {
                                        console.log(errorUser);
                                    });
                                    $scope.battleFriend = function(usersId, e) {
                                        $scope.randomDisable = true;
                                        $uibModalInstance.dismiss('Close');
                                        $rootScope.$broadcast('battleFriend', { quiz: quizList,usersId:usersId });
                                        e.stopPropagation();
                                        e.preventDefault();
                                    };
                                    $scope.modalClose = function() {
                                        $uibModalInstance.dismiss('Close');
                                    }
                                }
                            });
                        };
                    }
                });
            }
        };
    }
})();