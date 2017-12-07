/**
 * @ngdoc function
 * @name aaal.controller:LevelCtrl
 * @description
 * # LevelCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('LevelViewCtrl', LevelViewCtrl);

    /* @ngInject */
    function LevelViewCtrl($scope, $state, Level) {
        var vm = this;
        var ModelService = Level;
        vm.modelName = 'Level';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
