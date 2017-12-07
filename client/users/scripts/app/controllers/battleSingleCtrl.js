(function () {
  angular.module('usersEasyA+')
    .controller('battleSingleCtrl', battleSingleCtrl);
  
  function battleSingleCtrl( ) {
    var vm = this;
    vm.title = "Choose a Subject - Single Player";
    vm.battlesList = [{
      icon: '/assets/images/battles/type1.png',
      name: 'Matematik A',
      action: '#'
    },{
      icon: '/assets/images/battles/type2.png',
      name: 'Matematik B',
      action: '#'
    },{
      icon: '/assets/images/battles/type3.png',
      name: 'Matematik C',
      action: '#'
    }];
  }
})();
