'use strict';

describe('Controller: SubCategoryListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var SubCategoryListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        SubCategoryListCtrl = $controller('SubCategoryListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});