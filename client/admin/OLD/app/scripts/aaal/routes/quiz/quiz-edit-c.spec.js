'use strict';

describe('Controller: QuizEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var QuizEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //QuizEditCtrl = $controller('QuizEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});