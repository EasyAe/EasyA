'use strict';

describe('Controller: BootcampResolvedListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var BootcampResolvedListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        BootcampResolvedListCtrl = $controller('BootcampResolvedListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});