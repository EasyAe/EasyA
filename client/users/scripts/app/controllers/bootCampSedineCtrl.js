(function() {
    angular.module('usersEasyA+')
        .controller('bootCampSedineCtrl', ['$scope', '$location', '$rootScope', 'bootcampApi', '$timeout', bootCampSedineCtrl])
        .directive('bufferedScroll', function($parse) {
            return function($scope, element, attrs) {
                var handler = $parse(attrs.bufferedScroll);
                element.scroll(function(evt) {
                    var scrollTop = element[0].scrollTop,
                        scrollHeight = element[0].scrollHeight,
                        offsetHeight = element[0].offsetHeight;
                    if (scrollTop === (scrollHeight - offsetHeight)) {
                        $scope.$apply(function() {
                            handler($scope);
                        });
                    }
                });
            };
        });

    function bootCampSedineCtrl($scope, $location, $rootScope, bootcampApi, $timeout ) {
        var vm = this;
        $scope.loadData = true;
        $scope.dataHeader = false;
        parentmethod();
        $rootScope.$on("CallParentMethod", function(){
           parentmethod();
           // console.log('testing sedinre');
        });

        function parentmethod() {
            bootcampApi.getUserBootcamp().then(function(success) {            
            // console.log('Bootcamp Length', $scope.bootCamp.length);
            $scope.bootCamp = success.data;
            $scope.loadData = false;
            $scope.dataHeader = true;
            if(0 == $scope.bootCamp.length){
                $scope.errMsg = true;
            } else{
                $scope.errMsg = false;
            }
            $scope.loadMore = function() {
                if ($scope.limit < $scope.bootCamp.length) {
                    $scope.loadData = true;
                    $scope.limit += 15;
                } else if ($scope.bootCamp.length == $scope.bootCamp.length) {
                    $scope.loadData = false;
                }
            };

        }, function(error) {
            console.log(error);
        });
        };

        $scope.btcmpExplain = function(id) {
            $location.path('/bootcamp-explain').search({ bId: id });
        }

        vm.title = "Se dine forkerte svar";
        vm.battlesList = [{
            icon: 'assets/images/close.png',
            name: 'Question1',
            date: 'Today',
            subject: 'Matematik',
            examtype: 'Viden',
            subcategory: 'Algebra',
            action: '#bootcamp-explain'
        }, {
            icon: 'assets/images/close.png',
            name: 'Question2',
            date: 'Yesterday',
            subject: 'Matematik',
            examtype: 'Skriftlig',
            subcategory: 'Geometry',
            action: '#bootcamp-explain'
        }, {
            icon: 'assets/images/close.png',
            name: 'Question3',
            date: '2 days ago',
            subject: 'Matematik',
            examtype: 'Mundtlig',
            subcategory: 'Statistics',
            action: '#bootcamp-explain'
        }, {
            icon: 'assets/images/close.png',
            name: 'Question4',
            date: '1 week ago',
            subject: 'Matematik',
            examtype: 'Skriftlig',
            subcategory: 'Probability',
            action: '#bootcamp-explain'
        }, {
            icon: 'assets/images/close.png',
            name: 'Question5',
            date: '1 year ago',
            subject: 'Matematik',
            examtype: 'Viden',
            subcategory: 'Algebra',
            action: '#bootcamp-explain'
        }];
    }

})();
