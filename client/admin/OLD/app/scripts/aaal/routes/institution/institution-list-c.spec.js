'use strict';

describe('Controller: InstitutionListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var InstitutionListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        InstitutionListCtrl = $controller('InstitutionListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});