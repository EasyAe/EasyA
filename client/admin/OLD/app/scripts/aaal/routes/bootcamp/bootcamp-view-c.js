/**
 * @ngdoc function
 * @name aaal.controller:BootcampCtrl
 * @description
 * # BootcampCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('BootcampViewCtrl', BootcampViewCtrl);

    /* @ngInject */
    function BootcampViewCtrl($scope, $state, Bootcamp) {
        var vm = this;
        var ModelService = Bootcamp;
        vm.modelName = 'Bootcamp';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
