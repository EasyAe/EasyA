(function() {
    angular.module('usersEasyA+')
        .controller('profilController', profilController);


    // profilController.$inject = ['UserService'];


    function profilController($scope, $uibModal, UserService, userStatServices, $rootScope) {
        // var vm = this;
        $scope.userInfo = UserService.getUserData(1);
        //Game won details
        userStatServices.getWonBattles()
            .then(function(success) {
                $scope.gameWon = success.data;
            }, function(error) {
                console.log(error);
            });
        //Game lost details
        userStatServices.getLostBattles()
            .then(function(success) {
                $scope.gameLost = success.data;
            }, function(error) {
                console.log(error);
            });
        //Game tie details
        userStatServices.getTieBattles()
            .then(function(success) {
                $scope.gameTie = success.data;
            }, function(error) {
                console.log(error);
            });
        //Game total details
        userStatServices.getTotalBattles()
            .then(function(success) {
                $scope.gameTotal = success.data;
            }, function(error) {
                console.log(error);
            });
        $scope.editAvatar = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/create-user.html',
                'controllerAs': 'profil',
                controller: function($uibModalInstance, $scope, $rootScope, $location, $log, $timeout, userApi) {
                    $scope.uploadError = false;
                    $scope.modalClose = function() {
                        $uibModalInstance.dismiss('Close');
                    }
                    $scope.thumbnail = {
                        dataUrl: ''
                    };
                    $scope.fileReaderSupported = window.FileReader != null;
                    $scope.photoChanged = function(files) {
                        if (files != null) {
                            var file = files[0];
                            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                                var files = {
                                    file: file,
                                }
                                $timeout(function() {
                                    var fileReader = new FileReader();
                                    fileReader.readAsDataURL(file);
                                    fileReader.onload = function(e) {
                                        $timeout(function() {
                                            $scope.thumbnail.dataUrl = e.target.result;
                                        });
                                    }
                                });
                                $scope.proPicUpload = function() {
                                    userApi.editProPic(files)
                                        .then(function(success) {
                                            var imgUrl = success.data.result.files.file[0].providerResponse.location;
                                            $scope.editUser = {};
                                            $scope.editUser.picture = imgUrl;
                                            userApi.editWelcomeUser($scope.editUser).then(function(success) {
                                                $rootScope.$broadcast('updateUser', {});
                                                $timeout(function() {
                                                    $uibModalInstance.dismiss();
                                                }, 600);
                                            }, function(error) {
                                                console.log(error);
                                                $scope.uploadError = true;
                                                $timeout(function() {
                                                    $scope.uploadError = false;
                                                }, 4000);
                                                $scope.uploadErrMsg = 'Upload Failed';
                                            });
                                        }, function(error) {
                                            console.log(error);
                                        });
                                }
                            }
                        }
                    }
                }
            });
        };
        $scope.editUser = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/edit-user.html',
                'controllerAs': 'editUser',
                controller: function($uibModalInstance, $scope, $rootScope, $timeout, cityApi, occupationApi, institutionApi, userApi) {
                    $scope.editUserErr = false;
                    $scope.modalClose = function() {
                        $uibModalInstance.dismiss('Close');
                    }
                    var userProimse = userApi.userEditDetails();
                    userProimse.then(function(User) {
                        $scope.editUser = User.data;
                        $rootScope.occuFilter = $rootScope.occupations[$scope.editUser.occupationId - 1].name;
                    }, function(errorUser) {
                        console.log(errorUser);
                    });
                    $scope.editUser.occupationId; 
                    $scope.changed = function() {
                        $rootScope.occuId = $scope.editUser.occupationId;
                        var san = $scope.editUser.occupationId;
                        console.log('san', san);
                        $rootScope.occuFilter = $rootScope.occupations[san - 1].name;
                        console.log('$scope.editUser.occupationId', $scope.occuFilter);
                    }
                    // var cityPromise = cityApi.getCities();
                    // cityPromise.then(function(cities) {
                    //     $scope.regions = cities.data;
                    // }, function(errorCities) {
                    //     console.log(errorCities);
                    // });
                    var cityPromise = cityApi.getRegion();
                    cityPromise.then(function(regions) {
                        $scope.regions = regions.data;
                        // console.log('$scope.regions', $scope.regions);
                    }, function(errorCities) {
                        console.log(errorCities);
                    });
                    var occupationPromise = occupationApi.getOccp();
                    occupationPromise.then(function(occp) {
                        $rootScope.occupations = occp.data;
                        
                        // console.log('occupations', $scope.occupations[0].name);
                    }, function(errorOccp) {
                        console.log(errorOccp);
                    });
                    var institutionPromise = institutionApi.getInst();
                    institutionPromise.then(function(inst) {
                        console.log("inst.data",inst.data)
                        $rootScope.institutions = inst.data;
                    }, function(errorInst) {
                        console.log(errorInst);
                    });
                    $scope.password = true; //code for enable the edit password section
                    $scope.showPassword = function() {
                        $scope.password = !$scope.password;
                    };

                    //password validation
                    $scope.checkPwd = function() {
                        var str = $scope.editpw.newPassword;
                        console.log('str', $scope.editpw.newPassword);
                        if (str.length < 8) {
                            alert("too_short");
                            return ("too_short");
                        } else if (str.length > 50) {
                            alert("too_long");
                            return ("too_long");
                        } else if (str.search(/\d/) == -1) {
                            alert("no_num");
                            return ("no_num");
                        } else if (str.search(/[a-zA-Z]/) == -1) {
                            alert("no_letter");
                            return ("no_letter");
                        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
                            alert("bad_char");
                            return ("bad_char");
                        }
                        return pwdUpdate();
                    }

                    function pwdUpdate() {
                        console.log($scope.editpw.newPassword, $scope.editpw.confirmation, localStorage.getItem('userId'));
                        // var user_data = JSON.stringify({ "password": $scope.oldpassword, "newPassword": $scope.newPassword, "confirmation": $scope.confirmation, "id": localStorage.getItem('userId') });
                        var user_data = { oldPassword: $scope.editpw.oldpassword, newPassword: $scope.editpw.newPassword, confirmation: $scope.editpw.confirmation }
                        console.log('user_data', user_data);
                        userApi.resetPassword(user_data).then(function(success) {
                            $scope.errPwdMatch = success.data.passwordChange;
                            if ($scope.errPwdMatch == 'Passwords do not match') {
                                console.log('not match');
                            } else {
                                console.log('match');
                            }

                        }, function(error) {
                            $scope.errPwdMatch = error.data.error.message;
                            console.log('error', error.data.error.message);
                        });
                    }

                    $scope.profileUpdate = function(editUser) {

                        if ($scope.password == false) {
                            pwdUpdate();

                        }

                        if ($scope.errPwdMatch == 'Passwords do not match') {
                            console.log('error');
                        } else {
                            console.log('editUser.regionId', $scope.editUser.regionId);
                            userApi.editUser(editUser).then(function(success) {

                                $rootScope.$broadcast('updateUser', {});
                                $timeout(function() {
                                    $uibModalInstance.dismiss();
                                }, 600);
                            }, function(error) {
                                console.log(error);
                                $scope.editUserErr = true;
                                $timeout(function() {
                                    $scope.editUserErr = false;
                                }, 4000);
                                $scope.editUserErrMsg = 'Something went wrong! Please try again';
                            })
                        }
                    }
                }
            });
        };


        // Highcharts.chart('contactchart', {
        //     exporting: { enabled: false },
        //     chart: {
        //         backgroundColor: '#fdfdfd',
        //         polar: true,
        //         type: 'line'
        //     },
        //     title: {
        //         text: '',
        //         x: -20
        //     },
        //     subtitle: {
        //         text: '',
        //         x: -20
        //     },
        //     xAxis: {
        //         lineColor: '#ccc',
        //         lineWidth: 4,
        //         labels: {
        //             style: {
        //                 color: '#999',
        //                 fontSize: '18px'
        //             }
        //         },
        //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        //             'Jul', 'Aug', 'Sep', 'Oct'
        //         ]
        //     },
        //     yAxis: {
        //         min: 0,
        //         max: 12000,
        //         tickInterval: 4000,
        //         lineColor: '#ccc',
        //         lineWidth: 4,
        //         labels: {
        //             style: {
        //                 color: '#999',
        //                 fontSize: '18px'
        //             }
        //         },
        //         title: {
        //             text: ''
        //         },
        //         plotLines: [{
        //             value: 0,
        //             width: 2,
        //             color: '#ccc'
        //         }]
        //     },
        //     color: {
        //         linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        //         stops: [
        //             [0, '#000']

        //         ]
        //     },
        //     plotOptions: {
        //         series: {
        //             marker: {
        //                 enabled: true,
        //                 fillColor: '#eaa15e',
        //                 lineWidth: 3,
        //                 lineColor: '#fff',
        //                 symbol: 'circle',
        //                 radius: 10
        //             }
        //         }
        //     },
        //     tooltip: {
        //         useHTML: true,
        //         formatter: function() {
        //             return this.y;
        //         },
        //         shadow: false,
        //         style: {
        //             color: '#fff',
        //             fontWeight: 'bold'
        //         },
        //         borderRadius: 10,
        //         backgroundColor: {
        //             linearGradient: [0, 30, 0, 10],
        //             stops: [
        //                 [0, '#eaa25e'],
        //                 [1, '#f0e15d']
        //             ]
        //         },
        //         borderWidth: 0,
        //         borderColor: '#AAA'
        //     },
        //     series: [{
        //         color: '#999',
        //         lineWidth: 4,
        //         data: [2000, 4000, 8000, 8000, 10000, 10000]
        //     }]
        // });
    }
})();
