'use strict';

describe('Controller: RegionListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var RegionListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        RegionListCtrl = $controller('RegionListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});