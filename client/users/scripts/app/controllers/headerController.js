(function () {
    angular.module('usersEasyA+')
        .controller('headerController', headerController);

    headerController.$inject = ['$location'];

    function headerController($location){
        
        var vm = this;
        vm.isActive = function(path){
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        }

        /** Temporary code for header*/
        vm.currentPath = $location.path();
        console.log('path',vm.currentPath);

    }
})();
