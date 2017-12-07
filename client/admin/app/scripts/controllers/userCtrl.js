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
    .controller('userCtrl', function($scope, userServices, Upload, $uibModal, $state, $stateParams) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };

        userServices.getAllUsers().then(function(response){
           $scope.users = response.data;
        });

        $scope.changeUserStatus = function(id, status){
            if(status){
                var data = {
                    id : id,
                    banned : false
                }
                userServices.changeUserStatus(data).then(function(response){
                    $state.reload();
                });
            }else{
                var data = {
                    id : id,
                    banned : true
                }
                userServices.changeUserStatus(data).then(function(response){
                    $state.reload();
                });
            }
        }

        $scope.showDeleteModel = function(id){
            $scope.userId = id;
            var modalInstance = $uibModal.open({
                templateUrl: 'userDeleteModel.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    items: function () {
                        return $scope.userId;
                    }
                }
            });
        }

        var ModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.userId = items;
            $scope.ok = function (id) {
                userServices.deleteUser(id).then(function successCallback(response) {
                    $uibModalInstance.close();
                    $state.reload();
                }, function errorCallback(response) {
                    return response;
                });
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }

        $scope.showUserEditModel = function(id){
            $scope.userId = id;
            userServices.getUser(id).then(function successCallback(response) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'userEditModel.html',
                    controller: UserModalInstanceCtrl,
                    resolve: {
                        items: function () {
                            return response;
                        }
                    }
                });
            }, function errorCallback(response) {});
        }

        var UserModalInstanceCtrl = function ($scope, $uibModalInstance,items) {
            $scope.user = items;
            userServices.getAllInstitutions().then(function successCallback(response) {
                $scope.institutions = response.data;
            }, function errorCallback(response) {});
            $scope.updateUser = function (id) {
                var userId = id;
                console.log($scope.user);
                var updateUserData = {
                    email:$scope.user.email,
                    id: $scope.user.id,
                }
                var updateUserDetailData = {
                    FirstName:$scope.user.userDetails.FirstName,
                    nickname:$scope.user.userDetails.nickname,
                    institutionId:$scope.user.institution,
                    id: $scope.user.userDetails.id,
                }
                userServices.userEdit(updateUserData).then(function successCallback(response) {
                    userServices.userDetailEdit(updateUserDetailData).then(function successCallback(response) {
                        $uibModalInstance.close();
                        $state.reload();
                    }, function errorCallback(response) {
                        return response;
                    });
                }, function errorCallback(response) {
                    return response;
                });
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    });
