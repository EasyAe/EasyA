/**
 * @ngdoc function
 * @name aaal.controller:InstitutionCtrl
 * @description
 * # InstitutionCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('InstitutionViewCtrl', InstitutionViewCtrl);

    /* @ngInject */
    function InstitutionViewCtrl($scope, $state, Institution) {
        var vm = this;
        var ModelService = Institution;
        vm.modelName = 'Institution';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
