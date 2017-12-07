/**
 * @ngdoc function
 * @name aaal.controller:BootcampResolvedCtrl
 * @description
 * # BootcampResolvedCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('BootcampResolvedViewCtrl', BootcampResolvedViewCtrl);

    /* @ngInject */
    function BootcampResolvedViewCtrl($scope, $state, BootcampResolved) {
        var vm = this;
        var ModelService = BootcampResolved;
        vm.modelName = 'BootcampResolved';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
