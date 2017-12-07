'use strict';

describe('Controller: EducationTypeViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var EducationTypeViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //EducationTypeViewCtrl = $controller('EducationTypeViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});