'use strict';

describe('Controller: CountryEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var CountryEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //CountryEditCtrl = $controller('CountryEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});