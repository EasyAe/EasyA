'use strict';

describe('Controller: QuizViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var QuizViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //QuizViewCtrl = $controller('QuizViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});