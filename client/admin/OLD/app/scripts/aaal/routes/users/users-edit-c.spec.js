'use strict';

describe('Controller: UsersEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var UsersEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //UsersEditCtrl = $controller('UsersEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});