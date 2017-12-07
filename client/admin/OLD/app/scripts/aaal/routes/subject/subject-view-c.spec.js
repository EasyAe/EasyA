'use strict';

describe('Controller: SubjectViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var SubjectViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //SubjectViewCtrl = $controller('SubjectViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});