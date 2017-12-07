'use strict';

describe('Controller: AnswerListCtrl', function ()
{

    // load the controller's module
    beforeEach(module('aaal'));

    var AnswerListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        AnswerListCtrl = $controller('AnswerListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function ()
    {
        expect(true).toBe(true);
    });
});