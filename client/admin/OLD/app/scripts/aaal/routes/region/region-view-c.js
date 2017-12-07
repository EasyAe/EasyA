/**
 * @ngdoc function
 * @name aaal.controller:RegionCtrl
 * @description
 * # RegionCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('RegionViewCtrl', RegionViewCtrl);

    /* @ngInject */
    function RegionViewCtrl($scope, $state, Region) {
        var vm = this;
        var ModelService = Region;
        vm.modelName = 'Region';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
