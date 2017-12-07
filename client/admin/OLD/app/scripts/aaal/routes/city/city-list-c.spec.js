'use strict';

describe('Controller: CityListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var CityListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        CityListCtrl = $controller('CityListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});