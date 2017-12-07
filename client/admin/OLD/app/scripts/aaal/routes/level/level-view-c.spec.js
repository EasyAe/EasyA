'use strict';

describe('Controller: LevelViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var LevelViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //LevelViewCtrl = $controller('LevelViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});