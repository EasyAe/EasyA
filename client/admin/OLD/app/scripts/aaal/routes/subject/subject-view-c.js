/**
 * @ngdoc function
 * @name aaal.controller:SubjectCtrl
 * @description
 * # SubjectCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('SubjectViewCtrl', SubjectViewCtrl);

    /* @ngInject */
    function SubjectViewCtrl($scope, $state, Subject) {
        var vm = this;
        var ModelService = Subject;
        vm.modelName = 'Subject';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
