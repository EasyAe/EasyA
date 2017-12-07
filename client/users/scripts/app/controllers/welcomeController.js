(function() {
    angular.module('usersEasyA+')
        .controller('welcomeCtrl', ['$scope', '$log', '$location', '$uibModal', '$uibModalInstance', '$rootScope', 'cityApi', 'occupationApi', 'institutionApi', 'userApi', welcomeCtrl]);

    function welcomeCtrl($scope, $log, $location, $uibModal, $uibModalInstance, $rootScope, cityApi, occupationApi, institutionApi, userApi) {
        var cityPromise = cityApi.getRegion();
        cityPromise.then(function(regions) {
            $scope.regions = regions.data;
        }, function(errorCities) {
            console.log(errorCities);
        });
        var occupationPromise = occupationApi.getOccp();
        occupationPromise.then(function(occp) {
            $scope.occupations = occp.data;
            $scope.changed = function() {
}
        }, function(errorOccp) {
            console.log(errorOccp);
        });
        var institutionPromise = institutionApi.getInst();
        institutionPromise.then(function(inst) {
            $scope.institutions = inst.data;
        }, function(errorInst) {
            console.log(errorInst);
        });
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
         
        
    }

})();
