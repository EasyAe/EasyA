'use strict';

describe('Controller: AnswerEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var AnswerEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //AnswerEditCtrl = $controller('AnswerEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});