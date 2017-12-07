'use strict';

describe('Controller: QuizListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var QuizListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        QuizListCtrl = $controller('QuizListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});