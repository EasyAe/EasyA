'use strict';

describe('Controller: QuestionListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var QuestionListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        QuestionListCtrl = $controller('QuestionListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});