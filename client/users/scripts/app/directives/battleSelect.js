
    angular.module('usersEasyA+')
        .directive('selectable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function(e) {
              $(".active").each(function() {
                $(this).removeClass('active');
              });
              element.addClass('active');
              scope.$apply(attrs.selectable);
            });
        }
    }
});


