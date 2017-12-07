'use strict';

describe('Controller: UserDetailsViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var UserDetailsViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //UserDetailsViewCtrl = $controller('UserDetailsViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});