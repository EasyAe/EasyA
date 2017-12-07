'use strict';

describe('Controller: ContainerViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var ContainerViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //ContainerViewCtrl = $controller('ContainerViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});