'use strict';

describe('Controller: ExamTypeListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var ExamTypeListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        ExamTypeListCtrl = $controller('ExamTypeListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});