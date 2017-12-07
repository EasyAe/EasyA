'use strict';

describe('Controller: BootcampListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var BootcampListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        BootcampListCtrl = $controller('BootcampListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});