(function () {
  angular.module('usersEasyA+')
    .controller('battleRoundCtrl', battleRoundCtrl);
  
  function battleRoundCtrl( ) {
    var vm = this;
    vm.title = "Round 5";
    vm.time = "1:34";
    vm.subTitle = "En funktion f(x) har monotonilinjen: Hvilken graf illustrerer f(x)?";
    vm.userLeft = [{
      icon: './assets/images/round/profile.png',
      name: 'Martina.H',
      title: 'oregard Gymnasium',
      points: '50'
    }];
    vm.userRight = [{
      icon: './assets/images/round/profile2.png',
      name: 'Martina.H',
      title: 'oregard Gymnasium',
      points: '70'
    }];
  }
})();
