'use strict';

describe('Controller: EducationTypeListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var EducationTypeListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        EducationTypeListCtrl = $controller('EducationTypeListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});