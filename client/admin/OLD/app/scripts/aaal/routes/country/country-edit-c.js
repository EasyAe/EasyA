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
        .controller('CountryEditCtrl', CountryEditCtrl);

    /* @ngInject */
    function CountryEditCtrl($state, ngToast, aaalToSchemaForm, Country) {
        var vm = this;
        var ModelService = Country;
        vm.modelName = 'Country';

        //form and schema definition
        vm.schema = aaalToSchemaForm(vm.modelName);
        vm.form = [
            '*',
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        // load or create new instance
        if ($state.params.id) {
            ModelService.findById({id: $state.params.id})
                .$promise
                .then(function(model) {
                    vm.model = model;
                }, function() {
                    ngToast.danger('Could not load model #' + $state.params.id);
                    $state.go('private.CountryList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.CountryList');
        }

        vm.createOrUpdate = function() {
            // update
            if (vm.model.id) {
                var modelInstance = new ModelService(vm.model);
                vm.submitPromise = modelInstance.$save()
                    .then(postSave);
            }
            // create
            else {
                vm.submitPromise = ModelService.create(vm.model)
                    .$promise
                    .then(postSave);
            }
        };
    }
})();
