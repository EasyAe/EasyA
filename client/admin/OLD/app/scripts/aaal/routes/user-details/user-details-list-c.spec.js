'use strict';

describe('Controller: UserDetailsListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var UserDetailsListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        UserDetailsListCtrl = $controller('UserDetailsListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});