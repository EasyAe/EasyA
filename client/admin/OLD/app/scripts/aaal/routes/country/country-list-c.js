/**
 * @ngdoc function
 * @name aaal.controller:CountryCtrl
 * @description
 * # CountryCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('CountryListCtrl', CountryListCtrl);

    /* @ngInject */
    function CountryListCtrl(Country) {
        var vm = this;
        var ModelService = Country;

        function loadModel() {
            vm.rowCollection = ModelService.find();
        }

        vm.viewState = 'private.CountryView';
        vm.editState = 'private.CountryEdit';

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