'use strict';
(function() {
    angular.module('usersEasyA+')
        .controller('BodyCtrl', ['$scope', '$routeParams', 'bootcampApi', 'occupationApi', 'institutionApi' , '$rootScope', '$uibModal' , '$log', '$location', '$interval', 'userApi', 'cityApi', 'rankServices', 'socketPort', '$cookieStore', '$timeout', '$route', '$window', '$base64', 'Users', BodyCtrl]);

    function BodyCtrl($scope, $routeParams, bootcampApi, occupationApi, institutionApi, $rootScope, $uibModal, $log, $location, $interval, userApi, cityApi, rankServices, socketPort, $cookieStore, $timeout, $route, $window, $base64, Users) {
        $scope.main = {
            title: 'Edootech',
            user: ''
        };
    
        var gameType;
        var battleData = {};
        var battleTimer;
        $scope.battleFriendId = null;
        $scope.type = null;
        $rootScope.rematchOpnt = null;
        var socket;
        var player = {};
        
        function connectSocket(){
            socket = io.connect(socketPort, { reconnect: true });
            player = {
                id: localStorage.getItem('userToken'),
                userId: parseInt(localStorage.getItem('userId')),
            };
            socket.on('connect', function() {
                socket.emit('authentication', player);
                socket.on('authenticated', function(message) {
                    if(message == false){
                        connectSocket();
                    }
                    console.log("Socket Connected ", message);
                    socket.emit('registerPlayer', player);
                });
                socket.on('registeredPlayer', function(user) {
                    questionIds = []
                    roundCount = 0;
                    $scope.opntDetails = {}; //Removing previous opponenet details
                });

                socket.on("AssigningGameToPlayerFailed", function(playerId) {
                });
                socket.on("gameCreated", function(game) { //New game created
                    $rootScope.$broadcast('closeOppModal', {});
                });

                socket.on("BattleRequest", function(gameData) {
                    $scope.opntDetails = gameData.playerDetails;
                    $rootScope.$broadcast('BattleRequested', gameData);
                });

                socket.on("PlayerAcceptedMatch",function(message){
                });
                socket.on('PlayerDeclinedMatch',function(message){
                    $rootScope.$broadcast('PlayerDeclinMatch', message);
                });
                socket.on("newGameCreationFailed", function(message) {
                    $rootScope.$broadcast('alreadyInGame', message); //For showing error message for game
                });
                socket.on('GameJoinedSuccessfully', function(game){
                    $rootScope.$broadcast('closeOppModal', {});
                });
                $rootScope.battleFriendClick = 0;
                $scope.$on('battleFriend', function(event, args) {
                    if($rootScope.battleFriendClick ==0){
                        player.subCategoryId = $rootScope.battleSubCategoryId;
                        battleData.player = player;
                        battleData.otherPlayer = args.usersId;
                        $scope.battleFriendId = args.usersId;
                        var userProimseBattleFriend = userApi.userDetailsBattleFriend(args.usersId);
                        userProimseBattleFriend.then(function(User) {
                            $scope.opntDetails = User.data[0];
                            $rootScope.rematchOpnt = User.data[0];
                        }, function(errorUser) {
                            console.log(errorUser);
                        });
                        socket.emit('battleFriend', battleData);
                        $rootScope.battleFriendClick = 1;
                    }
                });

                socket.on("ErrorFindingPlayer",function(message){
                    $rootScope.$broadcast('playerOfline', message);
                });

                $scope.$on('declineBattle', function(event, gameId) {
                    socket.emit('battleDeclined', gameId); //request for decline rematch
                });

                $scope.$on('cancelGame', function(gameId) {
                    socket.emit('cancelGame', gameId);
                });

                socket.on("GameCanceled",function(message){
                });

                socket.on("ErrorDeletingGame", function(message){
                    console.log(message);
                });
                //Events listen when the opponent joints the game
                socket.on("ErrorGettingPlayerDetails", function(err) {
                    console.log(err);
                });
                $scope.opntTimer = false;
                socket.on("otherPlayerDetails", function(userDetails) { //For getting the opponent details
                    userApi.userInstitution(userDetails.institutionId).then(function(inst) {
                        $scope.opntTimer = true;
                        $scope.opntDetails = userDetails;
                        $rootScope.rematchOpnt = userDetails;
                        $scope.opntDetails.institution = inst.data.name;
                    })
                });

                socket.on("GameStarting", function(game) {
                    $scope.opntTimer = true;
                    $timeout(function() {
                        questionIds = []; //Clearing last game objects;
                        roundCount = 0;
                        gameDetails = game; //Storingnew game details
                        $scope.$apply(function() {
                            $scope.gameRoundNo = 0;
                            $scope.usrPlrGmePoint = 0;
                            $scope.otrPlrGmePoint = 0;
                            $location.path("/battle-step");
                        });
                    }, 6000);
                });

                $scope.$on('battleAccepted', function(event, gameId) {
                    $scope.opntTimer = true;
                    $rootScope.rematchOpnt = $rootScope.usrDetail;
                    socket.emit('battleAccepted', gameId); //request for accepting rematch
                });

                socket.on('ErrorSendingQuestion', function(message) {
                    console.log(message);
                });
                socket.on("Round", function(round) {
                    $scope.$apply(function() {
                        if (round.question.questionTypeId == 1) {
                            $scope.ansBtnEnable = true;
                        } else {
                            $scope.ansBtnEnable = false;
                        }
                        $scope.answerEnable = false;
                        $scope.battleQuestion = round;

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
                        $scope.gameRoundNo = $scope.gameRoundNo + 1;
                        $scope.$broadcast('timer-reset');
                        $scope.$broadcast('timer-start');
                        $interval.cancel(battleTimer);
                        battleTimer = $interval(function() {
                            skipQuestion(round); //For next question after count down
                        }, 119000);
                    });
                });
                socket.on('NoQuestionFound', function(message) {
                    console.log(message);
                });
                socket.on('answerChecked', function(result) { //Answer of each question
                    if (result.answer == true) {
                        $scope.$apply(function() {
                            $scope.usrPlrGmePoint = result.points;
                        });
                    }
                });
                socket.on('waitingForOtherPlayer', function(message) { //Checking other player is answered or not
                    console.log(message);
                });
                socket.on('GameOver', function(game) {
                    $scope.opntTimer = false;
                    $interval.cancel(battleTimer);
                    if (game == 'Tie') {
                        $scope.gameResult = 'gameTie';
                    } else if (game.usersId == player.userId) {
                        $scope.gameResult = 'gameWon';
                    } else {
                        $scope.gameResult = 'gameLost';
                    }
                    userDetails(); //For invoking user api
                    $scope.$apply(function() {
                        $location.path("/battle-result");
                    });
                });
                socket.on("disconnected", function(user) {
                    $interval.cancel(battleTimer);
                    userDetails(); //For invoking user api
                    $scope.$apply(function() {
                        $location.path("/battle");
                        $route.reload();
                    });
                });
                socket.on("OtherPlayerQuitGame", function(points) {
                    $rootScope.GiveUp = 'disable';
                    $scope.opntTimer = false;
                    $interval.cancel(battleTimer);
                    $scope.usrPlrGmePoint = points;
                    $scope.otrPlrGmePoint = $rootScope.leaver;
                    $scope.gameResult = 'gameWon';
                    userDetails(); //For invoking user api
                    $scope.$apply(function() {
                        $location.path("/battle-result");
                    });
                })

                $scope.checkAnswer = function(roundData) {
                    socket.emit('checkAnswer', roundData);
                    $scope.ansBtnEnable = true;
                    $scope.answerEnable = true;
                }
                $scope.skipAnswer = function(roundData) {
                    socket.emit('timerEnd', roundData);
                    $scope.ansBtnEnable = true;
                    $scope.answerEnable = true;
                }
                $rootScope.GiveUp = 'enable';
                $rootScope.battleGiveUp = function() {
                    $scope.opntTimer = false;
                    $rootScope.GiveUp = 'disable';
                    $interval.cancel(battleTimer);
                    socket.emit('leaveGame', gameDetails.id);
                    $scope.usrPlrGmePoint = $rootScope.leaver;
                    $scope.otrPlrGmePoint = $rootScope.non_leaver;;
                    $scope.gameResult = 'gameLost';
                    userDetails(); //For invoking user api
                    $location.path("/battle-result");
                }
                $scope.reDirectBattle = function() {
                    socket.disconnect();
                    // $location.path('/battle');
                    // $route.reload();
                    $window.location.href = '#/battle';
                };
                $scope.reDirectBootcamp = function() {
                    socket.disconnect();
                    $location.path('/bootcamp-sedine');
                };
                $scope.reDirectRanking = function() {
                    socket.disconnect();
                    $location.path('/ranking');
                };
                $scope.rematchTrigger = function() {
                    $scope.rematchOpnt = $rootScope.rematchOpnt;
                    $rootScope.$broadcast('rematchSubmit',function(){
                    });
                    // socket.disconnect();
                    var rematch = {};
                    rematch.oldGameId = gameDetails.id;
                    rematch.subCategoryId = gameDetails.subCategoryId;
                    socket.emit('rematch', rematch);
                }
                $scope.$on('acceptRematch', function(event, gameId) {
                    $scope.opntTimer = true;
                    socket.emit('rematchAccepted', gameId); //request for accepting rematch
                });
                $scope.$on('declineRematch', function(event, gameId) {
                    socket.emit('rematchDeclined', gameId); //request for decline rematch
                    socket.disconnect(); //For disconnecting socket
                });
                socket.on('ErrorCheckingAnswer', function(message) {
                    console.log(message);
                }); //Error for answer send to backend
                socket.on('ErrRequestingRematch', function(message) {}); //Error while rematch request
                socket.on("rematchRequested", function(gameId) { //Rematch request from opponent
                    $rootScope.$broadcast('rematchRequest', gameId);
                });
                socket.on('RematchDeclined', function(message) { //Opponent declined rematch
                    $rootScope.$broadcast('rematchRequest', 'false');
                    socket.disconnect(); //For disconnecting rematch
                });
                socket.on('otherPlayerPoints', function(otherPlayerPoints) {
                    $scope.otrPlrGmePoint = otherPlayerPoints;
                });
            });
        }

        $scope.$on('PlayerDeclinMatch', function(event, message) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/player_declined.html',
                'controllerAs': 'playerDeclinedCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.modalClose = function() {
                        $uibModalInstance.dismiss('Close');
                    }
                }
            });
        });

        $scope.$on('playerOfline', function(event, message) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/player_ofline.html',
                'controllerAs': 'playerOflineCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.modalClose = function() {
                        $uibModalInstance.dismiss('Close');
                    }
                }
            });
        });

        $scope.singlePlayerGiveup = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/single_player_giveup.html',
                'controllerAs': 'correctAnswerCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $location) {
                    $scope.editUserErr = false;
                    $scope.yes = function() {
                        $uibModalInstance.dismiss('Close');
                        $rootScope.battleGiveUp();
                    };
                    $scope.no = function() {
                        $uibModalInstance.dismiss('Close');

                    };
                }
            });
        };

        $scope.$on('BattleRequested', function(event, gameData) {
            var bdyDclnRmch = true;
            var reMatch = gameData.gameId;
            var opntDetails = $scope.userBattleFriendDetails;
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/battle-friend-request.html',
                'controllerAs': 'BattleRequestedCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.reMatchSend = "testing";
                    $rootScope.rematchOpnt = gameData.playerDetails;
                    $scope.rematchId = reMatch;
                    $scope.battleAccept = function(gameId){
                        $rootScope.battleFriendClick = 1;
                        bdyDclnRmch = false;
                        $rootScope.$broadcast('battleAccepted', gameId);
                        $uibModalInstance.dismiss('Close');
                    }
                    $scope.declineRematch = function(gameId){
                        $rootScope.battleFriendClick = 0;
                        declineBrodTrigger(gameId);
                        $uibModalInstance.dismiss('Close');
                    }
                    $scope.modalClose = function() {
                        $rootScope.battleFriendClick = 0;
                        $uibModalInstance.dismiss('Close');
                    }
                }
            });
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                if(reMatch != 'false' && bdyDclnRmch == true) {
                    declineBrodTrigger(reMatch);
                }
            });
        });



        function declineBrodTrigger(reMatch) {
            // $uibModalInstance.dismiss('Close');
            $rootScope.$broadcast('declineBattle', reMatch);
        }

        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            if ($location.search().reset_password === '1') {
                resetPassword();
            }
        });
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            if (!localStorage.getItem('userToken') && !localStorage.getItem('userId')) {
                $location.path('/front'); //Redirecting to home page if the user not logged in
            }
        });


        if (localStorage.getItem('userToken') && localStorage.getItem('userId')) {
            userDetails(); //Invoking userDetails service function
        } else {
            logChanges();
            if ($location.search().uid && $location.search().token) {
                loginModalOpen(); //Open login modal when link redirect from signup mail.
                $location.path('/front');
            }
        }
        $scope.$on('updateUser', function(event) {
            userDetails(); //For invoking user api
        });
        $rootScope.$on('updateUsrPoints', function() {
            userDetails(); //For invoking user api
        });
        bootCount();
        $rootScope.$on("bootCountBody", function() {
            bootCount();
        });
        //Bootcamp count function
        function bootCount() {
            bootcampApi.getUserBootcamp().then(function(success) {
                $scope.bootCamp = success.data;
                //Bootcamp count
                var arrayObj = $scope.bootCamp;
                var trueCount = 0;
                var falseCount = 0;
                arrayObj.forEach(function(object) {
                    object.resolved === true ? trueCount++ : falseCount++;
                });

                $rootScope.bootcampCount = falseCount;
                // console.log('falseCount', falseCount);
            }, function(error) {
                console.log(error);
            });
        };

        function userDetails() { //userDetails service invoking
            var userProimse = userApi.userDetails();
            userProimse.then(function(User) {
                $scope.userDetails = User.data[0];
                $rootScope.usrDetail = User.data[0];
                // console.log('usrDetail', $rootScope.usrDetail);
                // console.log('regionid', $scope.userDetails.regionId);
                $rootScope.regionId = $scope.userDetails.regionId;
                // console.log('$scope.userDetails', $scope.userDetails);
                //Function for highscho ol hide
                // console.log('users', $scope.userDetails.occupation.name);
                // $scope.occupationType = $scope.userDetails.occupation.name;
                if ($scope.userDetails.regionId == null || $scope.userDetails.occupationId == null) {
                    $scope.showWelcome();
                } else {
                    // $rootScope.educationTypeId = User.data[0].institution.educationTypeId;
                    cmnUsrRanking($scope.userDetails); //For getting user ranking for profile and sidebar
                }
            }, function(errorUser) {
                console.log(errorUser);
                logChanges();
            });
        }

        function logChanges() { //Changes after logout
            $scope.userDetails = null;
            localStorage.removeItem('userToken');
            localStorage.removeItem('userId');
            $location.path('/front');
        }

        // SignUp Modal
        $scope.showRegister = function(userId) {
                if (userId) {
                    $location.path('/battle');
                } else {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        templateUrl: 'scripts/app/views/modals/signup.html',
                        'controllerAs': 'signup',
                        controller: function($uibModalInstance, $scope, $log, $timeout) {
                            //password validation
                            $scope.checkPwd = function(register) {
                                var str = $scope.register.password;
                                if (str.length < 8) {
                                    $scope.errPwdMsg = 'too_short';
                                    return ("too_short");
                                } else if (str.length > 50) {
                                    $scope.errPwdMsg = 'too_long';
                                    return ("too_long");
                                } else if (str.search(/\d/) == -1) {
                                    $scope.errPwdMsg = 'no_num';
                                    return ("no_num");
                                } else if (str.search(/[a-zA-Z]/) == -1) {
                                    $scope.errPwdMsg = 'no_letter';
                                    return ("no_letter");
                                } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
                                    $scope.errPwdMsg = 'bad_char';
                                    return ("bad_char");
                                }

                                return registerUser(register);

                            }
                            $scope.modalClose = function() {
                                $uibModalInstance.dismiss('Close');
                            }
                            $scope.signupToggle = false;
                            //For terms and condition signup checkbox
                            $scope.terms_conditions = { isselected: false };
                            $scope.errPwdMsg = false;
                            $scope.regError = false;

                            function registerUser(register) { //User signup function
                                var promise = userApi.registerUser(register);
                                promise.then(function(Register) {
                                    $scope.signupToggle = true;
                                }, function(errorRegister) {
                                    $scope.regError = true;
                                    $timeout(function() {
                                        $scope.regError = false;
                                    }, 4000);
                                    if (errorRegister.data) {
                                        $scope.regErrMsg = errorRegister.data.error.message;
                                    } else {
                                        $scope.regErrMsg = "Something went wrong!"
                                    }
                                });
                            };
                        }
                    });
                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                }
            }
        // Login Modal
        $scope.showLogin = function(e) {
            loginModalOpen(); //Open login modal
        }

        function loginModalOpen() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/login.html',
                'controllerAs': 'login',
                controller: function($uibModalInstance, $scope, $location, $log, $timeout) {

                    //Get remember me values
                    // if($cookieStore.get('email') != "undefined" || $cookieStore.get('email') != null){
                    //     $scope.login.email = $cookieStore.get('email');
                    //     $scope.login.password = $cookieStore.get('password');
                    //     $scope.login.username = $cookieStore.get('username');
                    //     console.log('emailset', $scope.login.email);
                    //     console.log('passwordset', $scope.login.password);
                    //     console.log('passwordset', $scope.login.password);
                    // }
                    $scope.emailField = true; //For showing email and hide username field
                    var fieldStatus = $scope.emailField; //Variable is for checking input fields.
                    $scope.loginClear = function() {
                        if (fieldStatus == $scope.emailField && $scope.emailField == true) {
                            $scope.login.username = null;
                        } else if (fieldStatus == $scope.emailField && $scope.emailField == false) {
                            $scope.login.email = null;
                        } else if (fieldStatus != $scope.emailField && $scope.emailField == true) {
                            $scope.login.email = null;
                        } else if (fieldStatus != $scope.emailField && $scope.emailField == false) {
                            $scope.login.username = null;
                        }
                        fieldStatus = $scope.emailField;
                    }
                    $scope.modalClose = function() {
                            $uibModalInstance.dismiss('Close');
                        }
                        // Forgot Password Modal
                    $scope.forgotPassword = function() {
                        $uibModalInstance.dismiss('Close');
                        console.log('click');
                        var modalInstance = $uibModal.open({
                            animation: true,
                            templateUrl: 'scripts/app/views/modals/forgot_password.html',
                            'controllerAs': 'fpwd',
                            controller: function($uibModalInstance, $scope, $location, $log, $timeout) {
                                $scope.sendEmail = function() {}
                                $scope.sendEmail = function() {
                                    var forgotUserData = {
                                        email: $scope.forgotEmail
                                    };
                                    userApi.resetPwd(forgotUserData).then(function(success) {
                                        $uibModalInstance.dismiss('Close');

                                        var modalInstance = $uibModal.open({
                                            animation: true,
                                            templateUrl: 'scripts/app/views/modals/emailSent.html',
                                            'controllerAs': 'emailSent',
                                            controller: function($uibModalInstance, $scope, $location, $log, $timeout) {
                                                $scope.modalClose = function() {
                                                    $uibModalInstance.dismiss('Close');
                                                }
                                            }
                                        });


                                    }, function(error) {
                                        console.log(error);
                                        $scope.errEmailMsg = error.data.error.message;
                                    });
                                }
                            }
                        });
                    };
                    $scope.loginError = false;
                    $scope.loginUser = function(login) { //User login function
                        var loginUser = {};
                        if (fieldStatus == true) {
                            loginUser.email = login.email;
                        } else {
                            loginUser.username = login.username;
                        }
                        loginUser.password = login.password;
                        if(Users.isAuthenticated()) {
                            $location.path('/battle')
                        } else {
                            Users.login({
                                email: login.email,
                                password: login.password,
                                rememberMe: $scope.rememberMe
                            }, function(responce) {
                                console.log(responce);
                                var user = Users.getCurrent(function() {
                                    var userDetails = Users.userDetails({id: user.id}, function() {
                                        console.log("userDetails", userDetails)
                                        $scope.userDetails = userDetails;
                                    });
                                });
                                if($location.nextAfterLogin != '/battle') {
                                    var next = $location.nextAfterLogin || '/battle';
                                    localStorage.setItem('userToken', responce.id);
                                    localStorage.setItem('userId', responce.userId);
                                    userDetails(); //Invoking userDetails service function
                                    occupationDetails();
                                    $uibModalInstance.dismiss('Close');
                                    $rootScope.loginStatus = true;
                                    $location.nextAfterLogin = null;
                                    $location.path('/battle');
                                } else {
                                    
                                    userDetails(); //Invoking userDetails service function
                                    $uibModalInstance.dismiss('Close');
                                    $rootScope.loginStatus = true;
                                    $location.path('/battle')
                                }
                            }, function (errorLogin) {
                                console.log(errorLogin);
                                $scope.loginError = true;
                                $timeout(function() {
                                    $scope.loginError = false;
                                }, 5000);
                                $scope.loginErrorMessage = errorLogin.data.error.message;
                            });
                        }
                    };
                }
            });
            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        function occupationDetails(){
            var occupationPromise = occupationApi.getOccp();
            occupationPromise.then(function(occp) {
                $rootScope.occupations = occp.data;
            }, function(errorOccp) {
                console.log(errorOccp);
            });
        }
        
        // Welcome Modal 
        $scope.showWelcome = function() {
            console.log("welcome");
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/welcome.html',
                'controllerAs': 'welcomeCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $timeout, cityApi, occupationApi, institutionApi, userApi) {
                    $scope.occupationChanged = function() {
                        $rootScope.occuId = $scope.user.occupationId;
                        var san = $scope.user.occupationId;
                        $rootScope.occuFilter = $rootScope.occupations[san-1].name;
                    }

                    $scope.welSubmit = function(edit) {
                        var editUsr = {};
                        editUsr.occupationId = parseInt(edit.occupationId);
                        editUsr.regionId = parseInt(edit.regionId);
                        editUsr.institutionId = parseInt(edit.institutionId);
                        userApi.editWelcomeUser(editUsr).then(function(success) {
                            $rootScope.$broadcast('updateUser', {});
                            $uibModalInstance.dismiss();
                            $location.path('/battle');
                        }, function(error) {})
                    }
                    var institutionPromise = institutionApi.getInst();
                    institutionPromise.then(function(inst) {
                        $rootScope.institutions = inst.data;
                    }, function(errorInst) {
                        console.log(errorInst);
                    });
                    var cityPromise = cityApi.getRegion();
                    cityPromise.then(function(regions) {
                        $rootScope.regions = regions.data;
                        // console.log('$scope.regions', $scope.regions);
                    }, function(errorCities) {
                        console.log(errorCities);
                    });
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
        

        //user Logout
        $scope.userLogout = function() {
            $scope.userDetails = null;
            localStorage.removeItem('userToken');
            localStorage.removeItem('userId');
            Users.logout(function() {
                $location.path('/front');
            }, function(error) {
                console.log(error);
            });
        };

        //Reset Password
        function resetPassword() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/reset_password.html',
                'controllerAs': 'passwordResetCtrl',
                controller: function($uibModalInstance, $scope, $location, $log, $timeout) {

                    $scope.checkFrPwd = function() {
                        var str = $scope.newPassword;
                        if (str.length < 8) {
                            $scope.errPwdMsg = 'too_short';
                            return ("too_short");
                        } else if (str.length > 50) {
                            $scope.errPwdMsg = 'too_long';
                            return ("too_long");
                        } else if (str.search(/\d/) == -1) {
                            $scope.errPwdMsg = 'no_num';
                            return ("no_num");
                        } else if (str.search(/[a-zA-Z]/) == -1) {
                            $scope.errPwdMsg = 'no_letter';
                            return ("no_letter");
                        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
                            $scope.errPwdMsg = 'bad_char';
                            return ("bad_char");
                        }
                        return resetPw();
                    }

                    function resetPw() {
                        var user_data = { newPassword: $scope.newPassword, confirmation: $scope.confirmation, access_token: $location.search().access_token, usr_id: $location.search().uid };
                        userApi.forgotPassword(user_data).then(function(success) {

                            $scope.successPwdMatch = success.data.passwordChange;
                            $location.url($location.path());
                            $timeout(function() {
                                $uibModalInstance.dismiss('Close');
                            }, 1000);
                            // if ($scope.errPwdMatch == 'Passwords do not match') {
                            //     console.log('not match');
                            // } else {

                            //     console.log('match');
                            // }

                        }, function(error) {
                            $scope.errPwdMatch = error.data.error.message;
                            console.log(error);
                        });
                    }
                }
            });
        }
        $scope.setActiveItem = function(val) { //For selecting choose one option
            $scope.activeItem = val;
            $scope.ansBtnEnable = false;
        };
        //Battle socket io starts
        // var socket = io('http://wd-agency.com:6565');
        var player = {};
        $scope.$on('randomOpponent', function(event, args) { //Game creation and match making
            for (i = 0; i < args.quiz.length; i++) {
                if ($rootScope.battleEducationId == args.quiz[i].educationTypeId) {
                    break;
                }
            }
            playerCreation($rootScope.battleSubCategoryId); //Creating player object
        });

        function playerCreation(subCategoryId) {
            player = {
                id: localStorage.getItem('userToken'),
                userId: parseInt(localStorage.getItem('userId')),
                subCategoryId: subCategoryId
            };
            socket.emit('startGame', player);
            // socketConnect(); //Invoking socket for battle
            // connectSocket();
        }

        //get points
        function usrPoints() {
            userApi.getPoints().then(function(success) {
                // console.log('success', success);
                $rootScope.leaver = success.data[2].value;
                $rootScope.non_leaver = success.data[3].value;
                // console.log('san', $scope.leaver);
                // console.log('san', $scope.non_leaver);
            }, function(error) {

            });
        }
        usrPoints();
        $scope.$on('$routeChangeStart', function(next, current) {
        var url = $location.absUrl().split('#/')[1];

            if(url === 'battle' | url === 'bootcamp' | url === 'opponent' | url === 'battleresult'){
                bannerAds();
            }
            // else{
            //     console.log('null')
            // }
            if(url === 'battle'){
                // $timeout(function() {
                    connectSocket();
                // }, 3000);
            }

        });

        //get Ads
        function bannerAds() {
            var url = $location.absUrl().split('#/')[1];

            if(url == 'battle'){
                var titleId = 7;
            }
            if(url == 'bootcamp'){
                var titleId = 10;
            }
            if(url == 'opponent'){
                var titleId = 9;
            }
            if(url == 'battleresult'){
                var titleId = 8;
            }
            // console.log('titleId', titleId);
            if(url === 'battle' | url === 'bootcamp' | url === 'opponent' | url === 'battleresult'){
                userApi.getAds(titleId).then(function(success) {
                // console.log('getAds', success);
                $scope.adImage = success.data[0].image;
                $scope.adUrl = success.data[0].url;
                // console.log($scope.adImage, $scope.adUrl);
            }, function(error) {

            });
            }
            // else{
            //     console.log('null')
            // }

        }
        bannerAds();

        var questionIds = [];
        var gameDetails;
        var roundCount = 0;
        $scope.submitAnswer = function(bQuestion, answerId) {
            roundCount = roundCount + 1;
            var roundData = {};
            questionIds.push(bQuestion.question.id);
            if (bQuestion.question.questionTypeId == 1) { //For choose option
                roundData.answer = {};
                roundData.answer.id = parseInt(answerId);
            } else { //for sort option
                roundData.answer = [];
                angular.forEach(answerId, function(list) {
                    roundData.answer.push(list.id);
                });
            }
            roundData.gameId = gameDetails.id;
            roundData.questionId = bQuestion.question.id;
            roundData.questionIds = questionIds;
            roundData.subCategoryId = bQuestion.question.subCategoryId;
            roundData.round = roundCount;
            $scope.checkAnswer(roundData);
        }

        function skipQuestion(bQuestion) {
            roundCount = roundCount + 1;
            var roundData = {};
            questionIds.push(bQuestion.question.id);
            roundData.gameId = gameDetails.id;
            roundData.questionId = bQuestion.question.id;
            roundData.questionIds = questionIds;
            roundData.subCategoryId = bQuestion.question.subCategoryId;
            roundData.round = roundCount;
            $scope.skipAnswer(roundData);
        }
        // getNationalRanking
        function cmnUsrRanking(user) {
            rankServices.getNationalRanking().then(function(success) {
                for (var i = 0; i < success.data.length; i++) {
                    if (success.data[i].usersId == user.usersId) {
                        break; //For getting user rank
                    }
                }
                $scope.cmnNationalRank = i + 1;
                $scope.usrNationalProgress = (success.data[i].points / success.data[0].points) * 100;
            }, function(error) {
                console.log(error);
            });
            rankServices.getRegionalRanking().then(function(success) {
                var regionalList = [];
                for (var i = 0; i < success.data.length; i++) {
                    if (success.data[i].cityId == user.cityId) {
                        regionalList.push(success.data[i]);
                    }
                }
                for (var j = 0; j < regionalList.length; j++) {
                    if (regionalList[j].usersId == user.usersId) {
                        break;
                    }
                }
                $scope.cmnRegionalRank = j + 1;
                $scope.usrRegionalProgress = (regionalList[j].points / regionalList[0].points) * 100;
            }, function(error) {
                console.log(error);
            });
            rankServices.getSchoolRanking(user.institutionId).then(function(success) {
                for (var i = 0; i < success.data.length; i++) {
                    if (success.data[i].usersId == user.usersId) {
                        break; //For getting user rank
                    }
                }
                $scope.cmnSchoolRank = i + 1;
                $scope.usrSchoolProgress = (success.data[i].points / success.data[0].points) * 100;
            }, function(error) {
                console.log(error);
            });
        }
        $scope.defaultUser = "./assets/images/default-user.png" //For default image
        $scope.defaultImg = "./assets/images/no-img.jpg" //For default image


    }
})();
