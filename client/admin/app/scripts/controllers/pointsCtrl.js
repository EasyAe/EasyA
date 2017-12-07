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
    .controller('pointsCtrl', function($scope, pointsServices, $state, $stateParams, $window) {
        $scope.page = {
            title: 'Points',
            subtitle: 'At this screen you can change the amount of points given or taken'
        };

        // Get points
        pointsServices.getpoints().then(function(response){
           $scope.points = response;
        });
        $scope.count = 0;
        pointsServices.getCount().then(function(response){
           $scope.count = response.count;
        });

        $scope.updatePoints = function(){
            for(var i=0; i<$scope.count;i++){
                var data = {
                    id : $scope.points[i].id,
                    value : $scope.points[i].value
                }
                pointsServices.updatePoint(data).then(function(response){
                    $state.reload();
                });
            }
        }
    });
