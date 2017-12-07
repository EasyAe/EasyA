'use strict';

describe('Controller: BootcampEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var BootcampEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //BootcampEditCtrl = $controller('BootcampEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});