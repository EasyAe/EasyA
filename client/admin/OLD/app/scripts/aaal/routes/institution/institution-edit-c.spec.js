'use strict';

describe('Controller: InstitutionEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var InstitutionEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //InstitutionEditCtrl = $controller('InstitutionEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});