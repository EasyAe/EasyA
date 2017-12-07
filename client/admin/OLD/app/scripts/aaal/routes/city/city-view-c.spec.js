'use strict';

describe('Controller: CityViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var CityViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //CityViewCtrl = $controller('CityViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});