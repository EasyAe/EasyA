/**
 * @ngdoc function
 * @name aaal.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('CityEditCtrl', CityEditCtrl);

    /* @ngInject */
    function CityEditCtrl($state, ngToast, aaalToSchemaForm, City) {
        var vm = this;
        var ModelService = City;
        vm.modelName = 'City';

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
                    $state.go('private.CityList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.CityList');
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
