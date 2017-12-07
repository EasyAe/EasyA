'use strict';

describe('Controller: UsersListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var UsersListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        UsersListCtrl = $controller('UsersListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});