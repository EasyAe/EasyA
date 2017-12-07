/**
 * @ngdoc function
 * @name aaal.controller:ExamTypeCtrl
 * @description
 * # ExamTypeCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('ExamTypeViewCtrl', ExamTypeViewCtrl);

    /* @ngInject */
    function ExamTypeViewCtrl($scope, $state, ExamType) {
        var vm = this;
        var ModelService = ExamType;
        vm.modelName = 'ExamType';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
