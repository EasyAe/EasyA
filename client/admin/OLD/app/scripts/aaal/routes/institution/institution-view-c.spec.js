'use strict';

describe('Controller: InstitutionViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var InstitutionViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //InstitutionViewCtrl = $controller('InstitutionViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});