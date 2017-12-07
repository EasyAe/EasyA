'use strict';

describe('Controller: ContainerEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var ContainerEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //ContainerEditCtrl = $controller('ContainerEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});