'use strict';

describe('Controller: LevelListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var LevelListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        LevelListCtrl = $controller('LevelListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});