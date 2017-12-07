'use strict';

describe('Controller: OccupationViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var OccupationViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //OccupationViewCtrl = $controller('OccupationViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});