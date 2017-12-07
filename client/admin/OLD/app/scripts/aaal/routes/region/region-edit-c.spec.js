'use strict';

describe('Controller: RegionEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var RegionEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //RegionEditCtrl = $controller('RegionEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});