'use strict';

describe('Controller: UserDetailsEditCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var UserDetailsEditCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //UserDetailsEditCtrl = $controller('UserDetailsEditCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});