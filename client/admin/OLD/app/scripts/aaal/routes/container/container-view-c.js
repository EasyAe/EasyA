/**
 * @ngdoc function
 * @name aaal.controller:ContainerCtrl
 * @description
 * # ContainerCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('ContainerViewCtrl', ContainerViewCtrl);

    /* @ngInject */
    function ContainerViewCtrl($scope, $state, Container) {
        var vm = this;
        var ModelService = Container;
        vm.modelName = 'container';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
