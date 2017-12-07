/**
 * @ngdoc function
 * @name aaal.controller:QuestionTypeCtrl
 * @description
 * # QuestionTypeCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('QuestionTypeViewCtrl', QuestionTypeViewCtrl);

    /* @ngInject */
    function QuestionTypeViewCtrl($scope, $state, QuestionType) {
        var vm = this;
        var ModelService = QuestionType;
        vm.modelName = 'QuestionType';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
