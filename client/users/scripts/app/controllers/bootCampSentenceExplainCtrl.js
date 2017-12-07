(function () {
  angular.module('usersEasyA+')
    .controller('bootCampSentenceExplainCtrl', bootCampSentenceExplainCtrl);
  
  function bootCampSentenceExplainCtrl( ) {
    var vm = this;
    vm.title = "Bootcamp Title";
    vm.questions = [{
      title: 'Question Title',
      subTitle: 'På figuren ses to ensvinklede og retvinklede trekanter ABC og ADE. Nogle af sidelængderne er angivet på figuren. Bestem |AB|, og bestem omkredsen af trekant ADE.',
      icon: 'assets/images/diagram-sentence.png'
    }];
    vm.instructions = [{
      title: 'Answer Instruction:',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
      correctAnswer: 'Benyt kvadratsætningerpar begge led',
      wrongAnswer: 'Saml alle ens led',
      iconWrong: 'assets/images/close.png',
      iconCorrect: 'assets/images/tick.png',
      ans1: 'assets/images/answer.png',
      ans2: 'assets/images/answer.png'
    }];
    vm.tips = [{
      title: 'Hukommelses tip',
      content: 'Hvis man deler ordet fordoblingskonstant op i "fordobling" og "konstant" kan det hjælpe at vide "fordobling" henviser til y-værdien og betyder at gange med 2. Ordet "konstant" henviser til x-intervallet T2 og betyder at det aldrig ændrer sig.'
    }];
    vm.teoris = [{
      title: 'Teori',
      image: 'assets/images/teori.jpg' ,
      action: '#battle-single'    
    }];
  }
})();
