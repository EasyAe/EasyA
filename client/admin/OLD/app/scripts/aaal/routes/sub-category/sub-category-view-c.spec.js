'use strict';

describe('Controller: SubCategoryViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var SubCategoryViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //SubCategoryViewCtrl = $controller('SubCategoryViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});