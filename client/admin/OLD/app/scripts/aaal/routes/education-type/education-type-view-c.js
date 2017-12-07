/**
 * @ngdoc function
 * @name aaal.controller:EducationTypeCtrl
 * @description
 * # EducationTypeCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('EducationTypeViewCtrl', EducationTypeViewCtrl);

    /* @ngInject */
    function EducationTypeViewCtrl($scope, $state, EducationType) {
        var vm = this;
        var ModelService = EducationType;
        vm.modelName = 'EducationType';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
