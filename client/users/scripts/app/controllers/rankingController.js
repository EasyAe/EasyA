'use strict';
angular.module('usersEasyA+')
.controller('rankingController', function ($scope, rankServices, cityApi) {
    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
    // getNationalRanking
    rankServices.getNationalRanking().then(function(success) {
            $scope.nationalRanking = success.data;
            // console.log('$scope.nationalRanking', $scope.nationalRanking);
            for(var i=0;i<$scope.nationalRanking.length;i++){
                if($scope.nationalRanking[i].usersId == localStorage.getItem('userId')){
                    break; //For getting user rank
                }
            }
            $scope.userRank = i + 1;
            crntUsrDtls($scope.nationalRanking[i]);
            $scope.filterRegion = $scope.nationalRanking[i].cityId;
            }, function(error) {
            console.log(error);
        });

    // getRegionalRanking
    rankServices.getRegionalRanking().then(function(success) {
            $scope.regionalRanking = success.data;
            }, function(error) {
            console.log(error);
        });

    // getSchoolRanking
    function crntUsrDtls(user) {
        if(user.institutionId){
            rankServices.getSchoolRanking(user.institutionId).then(function(success) {
                $scope.schoolRanking = success.data;
                }, function(error) {
                console.log(error);
            });
        }
    }
    

    //getting all cities
    cityApi.getRegion().then(function(success) {
            $scope.regions = success.data;
            }, function(error) {
            console.log(error);
        });

});