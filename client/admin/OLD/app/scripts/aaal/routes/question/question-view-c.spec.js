'use strict';

describe('Controller: QuestionViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var QuestionViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //QuestionViewCtrl = $controller('QuestionViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});