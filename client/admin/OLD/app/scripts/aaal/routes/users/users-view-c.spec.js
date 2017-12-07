'use strict';

describe('Controller: UsersViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var UsersViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //UsersViewCtrl = $controller('UsersViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});