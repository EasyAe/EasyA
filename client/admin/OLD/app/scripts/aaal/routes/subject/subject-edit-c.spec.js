'use strict';

describe('Controller: SubjectEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var SubjectEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //SubjectEditCtrl = $controller('SubjectEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});