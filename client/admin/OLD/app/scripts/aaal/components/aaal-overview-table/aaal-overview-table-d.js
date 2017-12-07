/**
 * @ngdoc directive
 * @name aaal.directive:aaalOverviewTable
 * @description
 * # aaalOverviewTable
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .directive('aaalOverviewTable', aaalOverviewTable);


    /* @ngInject */
    function aaalOverviewTable() {
        var directive = {
            templateUrl: 'scripts/aaal/components/aaal-overview-table/aaal-overview-table-d.html',
            bindToController: true,
            controller: aaalOverviewTableCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                rows: '=',
                columns: '=',
                deleteFn: '&',
                viewStateLink: '@',
                editStateLink: '@'
            }
        };
        return directive;
    }


    /* @ngInject */
    function aaalOverviewTableCtrl($state) {
        var vm = this;
        vm.$state = $state;
    }
})();

