/**
 * @ngdoc function
 * @name aaal.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('CityViewCtrl', CityViewCtrl);

    /* @ngInject */
    function CityViewCtrl($scope, $state, City) {
        var vm = this;
        var ModelService = City;
        vm.modelName = 'City';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
