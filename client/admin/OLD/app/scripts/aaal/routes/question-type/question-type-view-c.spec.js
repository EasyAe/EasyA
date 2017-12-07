'use strict';

describe('Controller: QuestionTypeViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var QuestionTypeViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //QuestionTypeViewCtrl = $controller('QuestionTypeViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});