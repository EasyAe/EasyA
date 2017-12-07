(function() {
    angular.module('usersEasyA+')
        .controller('frntCtrl', ['$scope', '$location', 'anchorSmoothScroll', '$timeout', 'userApi', 'hotkeys', '$window', frntCtrl]);

    function frntCtrl($scope, $location, anchorSmoothScroll, $timeout, userApi, hotkeys, $window) {
          
        var vm = this;

        vm.occupation = [{ id: '1', name: 'Occupation A' },
            { id: '2', name: 'Occupation B' },
            { id: '3', name: 'Occupation C' }
        ];
        vm.region = [{ id: '1', name: 'Region A' },
            { id: '2', name: 'Region B' },
            { id: '3', name: 'Region C' }
        ];
        vm.institution = [{ id: '1', name: 'Institution A' },
            { id: '2', name: 'Institution B' },
            { id: '3', name: 'Institution C' }
        ];

        $scope.gotoElement = function(eID) {
            $location.hash('bottom');

            anchorSmoothScroll.scrollTo(eID);

        };
        vm.testimonials = [{
                id: '1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
                thumb: './assets/images/front/girl1.png'
            },
            { id: '2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing' },
            { id: '3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing' }
        ];

        $scope.thumbnail = {
            dataUrl: ''
        };
        $scope.fileReaderSupported = window.FileReader != null;
        $scope.photoChanged = function(files) {
            if (files != null) {
                var file = files[0];
                if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                    $timeout(function() {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function(e) {
                            $timeout(function() {
                                $scope.thumbnail.dataUrl = e.target.result;
                            });
                        }
                    });
                }
            }
        };

        //Facebook hotkey functionality
        hotkeys.add({
        combo: ['f'],
        callback: function(event, hotkey) {
        window.open('https://www.facebook.com/easyae.dk/','_blank');
        }
        });

    }

})();
