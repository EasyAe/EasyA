'use strict';

describe('Controller: CountryListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var CountryListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        CountryListCtrl = $controller('CountryListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});