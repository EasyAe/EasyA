'use strict';

describe('Controller: AnswerViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var AnswerViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //AnswerViewCtrl = $controller('AnswerViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});