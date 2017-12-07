'use strict';

describe('Controller: ContainerListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var ContainerListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        ContainerListCtrl = $controller('ContainerListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});