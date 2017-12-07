'use strict';

describe('Controller: SubCategoryEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var SubCategoryEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //SubCategoryEditCtrl = $controller('SubCategoryEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});