'use strict';

describe('Controller: BootcampViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var BootcampViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //BootcampViewCtrl = $controller('BootcampViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});