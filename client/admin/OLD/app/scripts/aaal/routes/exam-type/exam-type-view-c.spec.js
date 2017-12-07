'use strict';

describe('Controller: ExamTypeViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var ExamTypeViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //ExamTypeViewCtrl = $controller('ExamTypeViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});