(function () {
  angular.module('usersEasyA+')
    .controller('bootCampMultiExplainCtrl', bootCampMultiExplainCtrl);
  
  function bootCampMultiExplainCtrl( ) {
    var vm = this;
    vm.title = "Bootcamp Title";
    vm.questions = [{
      title: 'Question Title',
      subTitle: 'En funktion f(x) har monotonilinjen:Hvilken graf illustrerer f(x)?',
      icon: 'assets/images/formula-multi.jpg'
    }];
    vm.instructions = [{
      title: 'Answer Instruction:',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
      correctAnswer: 'Benyt kvadratsætningerpar begge led',
      wrongAnswer: 'Saml alle ens led',
      iconWrong: 'assets/images/close.png',
      iconCorrect: 'assets/images/tick.png',
      imgCorrect:'assets/images/correct-diagram.png',
      imgWrong:'assets/images/wrong-diagram.png',
    }];
    vm.tips = [{
      title: 'Hukommelses tip',
      content: 'Hvis man deler ordet fordoblingskonstant op i "fordobling" og "konstant" kan det hjælpe at vide "fordobling" henviser til y-værdien og betyder at gange med 2. Ordet "konstant" henviser til x-intervallet T2 og betyder at det aldrig ændrer sig.'
    }];
    vm.teoris = [{
      title: 'Teori',
      image: 'assets/images/teori.jpg' ,
      action: '#bootcamp-explain-sentence'    
    }];
  }
})();
