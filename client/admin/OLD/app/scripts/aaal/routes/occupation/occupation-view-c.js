/**
 * @ngdoc function
 * @name aaal.controller:OccupationCtrl
 * @description
 * # OccupationCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('OccupationViewCtrl', OccupationViewCtrl);

    /* @ngInject */
    function OccupationViewCtrl($scope, $state, Occupation) {
        var vm = this;
        var ModelService = Occupation;
        vm.modelName = 'Occupation';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
