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
        .controller('EducationTypeListCtrl', EducationTypeListCtrl);

    /* @ngInject */
    function EducationTypeListCtrl(EducationType) {
        var vm = this;
        var ModelService = EducationType;

        function loadModel() {
            vm.rowCollection = ModelService.find();
        }

        vm.viewState = 'private.EducationTypeView';
        vm.editState = 'private.EducationTypeEdit';

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