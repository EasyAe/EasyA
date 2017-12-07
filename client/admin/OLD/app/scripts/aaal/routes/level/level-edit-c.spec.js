'use strict';

describe('Controller: LevelEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var LevelEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //LevelEditCtrl = $controller('LevelEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});