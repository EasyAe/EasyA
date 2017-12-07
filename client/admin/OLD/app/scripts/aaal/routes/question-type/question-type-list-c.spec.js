'use strict';

describe('Controller: QuestionTypeListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var QuestionTypeListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        QuestionTypeListCtrl = $controller('QuestionTypeListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});