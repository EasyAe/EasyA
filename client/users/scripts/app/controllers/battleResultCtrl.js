(function() {
    angular.module('usersEasyA+')
        .controller('battleResultCtrl', battleResultCtrl);

    function battleResultCtrl($scope, $location, $uibModal, $rootScope) {
        $scope.reDirect = function(path) {
            $location.path(path);
        };
        $scope.$on('rematchSubmit', function() {
            $scope.rematchOpnt = $rootScope.rematchOpnt;
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/rematchSubmit.html',
                'controllerAs': 'rematchSubmitCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.modalClose = function() {
                        $uibModalInstance.dismiss('Close');
                    }
                    $timeout(function() {
                        $uibModalInstance.dismiss('Close');
                    }, 4000);
                }
            });
        });

        $scope.$on('BattleRematchRequest', function(event, gameData) {
            var bdyDclnRmch = true;
            var reMatch = gameData.gameId;
            var opntDetails = $scope.userBattleFriendDetails;
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/rematch.html',
                'controllerAs': 'BattleRematchRequestCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.reMatchSend = "testing";
                    $scope.rematchOpnt = gameData.playerDetails;
                    $scope.rematchId = reMatch;
                    $scope.acceptRematch = function(gameId){
                      bdyDclnRmch = false;
                      $rootScope.$broadcast('acceptRematch', gameId);
                      $uibModalInstance.dismiss('Close');
                    }
                    $scope.declineRematch = function(gameId){
                      declineBrodTrigger(gameId);
                      $uibModalInstance.dismiss('Close');
                    }
                    $scope.modalClose = function() {
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
        
        $scope.$on('rematchRequest', function(event, reMatch) {
            var bdyDclnRmch = true;
            var opntDetails = $scope.opntDetails;
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'scripts/app/views/modals/rematch.html',
                'controllerAs': 'rematchCtrl',
                controller: function($uibModalInstance, $scope, $rootScope, $log, $timeout) {
                    $scope.reMatchSend = "testing";
                    $scope.rematchOpnt = opntDetails;
                    $scope.rematchId = reMatch;
                    $scope.acceptRematch = function(gameId){
                      bdyDclnRmch = false;
                      $rootScope.$broadcast('acceptRematch', gameId);
                      $uibModalInstance.dismiss('Close');
                    }
                    $scope.declineRematch = function(gameId){
                      declineBrodTrigger(gameId);
                      $uibModalInstance.dismiss('Close');
                    }
                    $scope.modalClose = function() {
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
            $rootScope.$broadcast('declineRematch', reMatch);
        }
    }
})();
