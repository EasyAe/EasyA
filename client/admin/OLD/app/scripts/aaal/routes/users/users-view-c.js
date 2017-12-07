/**
 * @ngdoc function
 * @name aaal.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('UsersViewCtrl', UsersViewCtrl);

    /* @ngInject */
    function UsersViewCtrl($scope, $state, Users) {
        var vm = this;
        var ModelService = Users;
        vm.modelName = 'users';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
