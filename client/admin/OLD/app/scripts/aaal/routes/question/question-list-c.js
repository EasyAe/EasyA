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
        .controller('QuestionListCtrl', QuestionListCtrl);

    /* @ngInject */
    function QuestionListCtrl(Question) {
        var vm = this;
        var ModelService = Question;

        function loadModel() {
            vm.rowCollection = ModelService.find();
        }

        vm.viewState = 'private.QuestionView';
        vm.editState = 'private.QuestionEdit';

        /**
         * you can add columns and add filters to them like so
         * {name:'modelPropertyName': filter:'date:dd/MM/yy'}
         */
        vm.columns = [
            'id',
            'title'
        ];

        //remove to the real data holder
        vm.removeItem = function removeItem(row) {
            var index = vm.rowCollection.indexOf(row);

            if (index !== -1) {
                vm.rowCollection.splice(index, 1);

                return ModelService.deleteById({id: row.id})
                    .$promise
                    .then(function() {
                        loadModel();
                    }, function() {
                        loadModel();
                    });
            }
        };

        // INIT
        loadModel();
    }
})();