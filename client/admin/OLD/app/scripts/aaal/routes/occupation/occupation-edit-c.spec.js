'use strict';

describe('Controller: OccupationEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var OccupationEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //OccupationEditCtrl = $controller('OccupationEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});