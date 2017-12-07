/**
 * @ngdoc function
 * @name aaal.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('QuizViewCtrl', QuizViewCtrl);

    /* @ngInject */
    function QuizViewCtrl($scope, $state, Quiz) {
        var vm = this;
        var ModelService = Quiz;
        vm.modelName = 'Quiz';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
