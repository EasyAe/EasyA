(function () {
  angular.module('usersEasyA+')
    .controller('battleTypeController',['$scope', 'battleApi', battleTypeController]);
  
  function battleTypeController($scope, battleApi) {
    battleApi.getBattleTypes()
        .then(function(success){
           $scope.battleTypes = success.data; 
        },function(error){
            console.log(error);
        });
    // vm.battlesList = [{
    //   icon: '/assets/images/battles/type1.png',
    //   name: 'Matematik A',
    //   action: '#'
    // },{
    //   icon: '/assets/images/battles/type2.png',
    //   name: 'Matematik B',
    //   action: '#'
    // },{
    //   icon: '/assets/images/battles/type3.png',
    //   name: 'Matematik C',
    //   action: '#'
    // }];
  }
})();
