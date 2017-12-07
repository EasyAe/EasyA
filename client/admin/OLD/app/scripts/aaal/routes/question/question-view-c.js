/**
 * @ngdoc function
 * @name aaal.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('QuestionViewCtrl', QuestionViewCtrl);

    /* @ngInject */
    function QuestionViewCtrl($scope, $state, Question) {
        var vm = this;
        var ModelService = Question;
        vm.modelName = 'Question';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
