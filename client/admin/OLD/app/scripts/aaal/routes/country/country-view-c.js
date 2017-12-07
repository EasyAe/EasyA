/**
 * @ngdoc function
 * @name aaal.controller:CountryCtrl
 * @description
 * # CountryCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('CountryViewCtrl', CountryViewCtrl);

    /* @ngInject */
    function CountryViewCtrl($scope, $state, Country) {
        var vm = this;
        var ModelService = Country;
        vm.modelName = 'Country';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
