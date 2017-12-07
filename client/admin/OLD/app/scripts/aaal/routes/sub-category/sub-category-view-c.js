/**
 * @ngdoc function
 * @name aaal.controller:SubCategoryCtrl
 * @description
 * # SubCategoryCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('SubCategoryViewCtrl', SubCategoryViewCtrl);

    /* @ngInject */
    function SubCategoryViewCtrl($scope, $state, SubCategory) {
        var vm = this;
        var ModelService = SubCategory;
        vm.modelName = 'subCategory';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
