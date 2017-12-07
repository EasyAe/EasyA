/**
 * @ngdoc function
 * @name aaal.controller:UserDetailsCtrl
 * @description
 * # UserDetailsCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('UserDetailsViewCtrl', UserDetailsViewCtrl);

    /* @ngInject */
    function UserDetailsViewCtrl($scope, $state, UserDetails) {
        var vm = this;
        var ModelService = UserDetails;
        vm.modelName = 'UserDetails';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
