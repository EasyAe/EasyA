(function () {
    angular.module('usersEasyA+')
        .directive('sectionStars', sectionStarts);
    function sectionStarts(){
        return{
            restrict: 'E',
            templateUrl: '/scripts/app/views/templates/section-stars.html',
            scope:{
                value: '@'
            }
        }
    }
})();
