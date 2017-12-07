/**
 * @ngdoc function
 * @name aaal.controller:InstitutionCtrl
 * @description
 * # InstitutionCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('InstitutionEditCtrl', InstitutionEditCtrl);

    /* @ngInject */
    function InstitutionEditCtrl($state, ngToast, aaalToSchemaForm, Institution) {
        var vm = this;
        var ModelService = Institution;
        vm.modelName = 'Institution';

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
                    $state.go('private.InstitutionList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.InstitutionList');
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
