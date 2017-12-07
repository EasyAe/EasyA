'use strict';
var uid = 1;
/**
 * @ngdoc function
 * @name minovateApp.controller:examCtrl
 * @description
 * # examCtrl
 * Controller of the minovateApp
 */
app
    .controller('blanksCtrl', function($scope) {
        $scope.page = {
            title: 'Users',
            subtitle: 'Place subtitle here...'
        };
        $scope.options = [
        {
            value: '10 forskellige grene/discipliner ',
        },{
            value: 'Ligninger.',
        }, {
            value: 'Andengradspolynomiet.',
        }, {
            value: 'Lineaer vaekst.',
        }, {
            value: 'Eksponentiel vaekst.',
        }, {
            value: 'Differential og integralregning.',
        }, {
            value: 'Geometri.',
        }, {
            value: 'Rentesregning.',
        }, {
            value: 'Bogstavregning.',
        }, {
            value: 'At spotte graf for et udtryk.',
        }, {
            value: 'Andengradsligningen.',
        }];

        $scope.numbers = [
          "1",
          "2",
          "3",
          "4"
      ];

      $scope.answers = [
          "Drag the sentences in the correct order",
          "Pull the equations in place, so the result fits",
          "Create more in the admin panel"
      ];

    
    });
