(function() {
    angular.module('usersEasyA+')
        .controller('battleStepCtrl', battleStepCtrl);

    function battleStepCtrl($scope, $rootScope, $location) {
       //  $scope.$on("$locationChangeStart", function(event, next, current) {
       //              $rootScope.quitGame();
       //               console.log('battle step controller');
       //              console.log('next',next);
       // console.log('location',$location.path());
       // console.log('location',$location.search());
       //          });
        // var vm = this;
        $scope.subTitle = "Sammensaet en opskrift til losningen";
        $scope.userLeft = [{
            icon: './assets/images/round/profile.png',
            name: 'Martina.H',
            title: 'oregard Gymnasium',
            points: '50'
        }];
        $scope.userRight = [{
            icon: './assets/images/round/profile2.png',
            name: 'Martina.H',
            title: 'oregard Gymnasium',
            points: '70'
        }];
        $scope.go = function(path) {
            $location.path(path);
        };
        $scope.items = [{
            display: 'En udvikling hvor b er startvaerdien og a er fremskrivningsfaktoren har funktionsforskriften: f(x)=b*a',
            value: 'one'
        }, {
            display: 'Vaeksthastigheden til et bestemt tidspunkt x0 finds ved atbestemmer f "(xo)',
            value: 'two'
        }, {
            display: 'f(x)dx=[F(x)=F(b)-F(a)]',
            value: 'three'
        }, {
            display: 'Vaeksthastigheden til et bestemt tidspunkt x0 finds</br> ved atbestemmer f"(xo)',
            value: 'four'
        }];

    }
})();