/**
 * @ngdoc function
 * @name aaal.controller:AnswerCtrl
 * @description
 * # AnswerCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('AnswerViewCtrl', AnswerViewCtrl);

    /* @ngInject */
    function AnswerViewCtrl($scope, $state, Answer) {
        var vm = this;
        var ModelService = Answer;
        vm.modelName = 'Answer';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
