'use strict';

describe('Controller: CityEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var CityEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //CityEditCtrl = $controller('CityEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});