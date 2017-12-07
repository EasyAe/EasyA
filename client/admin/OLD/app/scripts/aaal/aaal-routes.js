/**
 * @ngdoc overview
 * @name aaal.routes
 * @description
 * # aaal.routes
 *
 * Routes module. All app states are defined here.
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .config(routerHelperProvider)
        .run(function($rootScope, $state, ngToast, $localStorage) {
            if ($localStorage.currentUser) {
                $rootScope.currentUser = $localStorage.currentUser;
            }

            // prevent private loads from loading if not logged in
            $rootScope.$on('$stateChangeStart', function(event, next, nextParams) {
                // redirect to login page if not logged in
                if (next.data && next.data.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $state.nextAfterLogin = next;
                    $state.nextAfterLoginParams = nextParams;
                    ngToast.danger('You\'re note logged in, please proceed');
                    $state.go('login');
                }
            });
        });


    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {

        var AAAL_BASE_STATE = 'private.';
        var aaalBaseWithoutDot = AAAL_BASE_STATE.substring(0, AAAL_BASE_STATE.length - 1);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                template: '<div class="login-page"><login></login></div>'
            })
            .state(aaalBaseWithoutDot, {
                url: '/private',
                abstract: true,
                template: '<aaal-header></aaal-header><main ui-view class="container"></main>',
                data: {
                    authenticate: true
                }
            })
            .state(AAAL_BASE_STATE + 'dashboard', {
                url: '/dashboard',
                template: '<div>Hello!</div>'
            })

            .state(AAAL_BASE_STATE + 'AnswerList', {
                url: '/answer/list',
                controller: 'AnswerListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/answer/answer-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'AnswerEdit', {
                url: '/answer/edit/:id',
                controller: 'AnswerEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/answer/answer-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'AnswerView', {
                url: '/answer/view/:id',
                controller: 'AnswerViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/answer/answer-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampResolvedList', {
                url: '/bootcamp-resolved/list',
                controller: 'BootcampResolvedListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp-resolved/bootcamp-resolved-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampResolvedEdit', {
                url: '/bootcamp-resolved/edit/:id',
                controller: 'BootcampResolvedEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp-resolved/bootcamp-resolved-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampResolvedView', {
                url: '/bootcamp-resolved/view/:id',
                controller: 'BootcampResolvedViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp-resolved/bootcamp-resolved-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampList', {
                url: '/bootcamp/list',
                controller: 'BootcampListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp/bootcamp-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampEdit', {
                url: '/bootcamp/edit/:id',
                controller: 'BootcampEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp/bootcamp-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'BootcampView', {
                url: '/bootcamp/view/:id',
                controller: 'BootcampViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/bootcamp/bootcamp-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'CityList', {
                url: '/city/list',
                controller: 'CityListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/city/city-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'CityEdit', {
                url: '/city/edit/:id',
                controller: 'CityEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/city/city-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'CityView', {
                url: '/city/view/:id',
                controller: 'CityViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/city/city-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'containerList', {
                url: '/container/list',
                controller: 'ContainerListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/container/container-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'containerEdit', {
                url: '/container/edit/:id',
                controller: 'ContainerEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/container/container-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'containerView', {
                url: '/container/view/:id',
                controller: 'ContainerViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/container/container-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'CountryList', {
                url: '/country/list',
                controller: 'CountryListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/country/country-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'CountryEdit', {
                url: '/country/edit/:id',
                controller: 'CountryEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/country/country-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'CountryView', {
                url: '/country/view/:id',
                controller: 'CountryViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/country/country-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'EducationTypeList', {
                url: '/education-type/list',
                controller: 'EducationTypeListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/education-type/education-type-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'EducationTypeEdit', {
                url: '/education-type/edit/:id',
                controller: 'EducationTypeEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/education-type/education-type-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'EducationTypeView', {
                url: '/education-type/view/:id',
                controller: 'EducationTypeViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/education-type/education-type-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'ExamTypeList', {
                url: '/exam-type/list',
                controller: 'ExamTypeListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/exam-type/exam-type-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'ExamTypeEdit', {
                url: '/exam-type/edit/:id',
                controller: 'ExamTypeEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/exam-type/exam-type-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'ExamTypeView', {
                url: '/exam-type/view/:id',
                controller: 'ExamTypeViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/exam-type/exam-type-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'InstitutionList', {
                url: '/institution/list',
                controller: 'InstitutionListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/institution/institution-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'InstitutionEdit', {
                url: '/institution/edit/:id',
                controller: 'InstitutionEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/institution/institution-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'InstitutionView', {
                url: '/institution/view/:id',
                controller: 'InstitutionViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/institution/institution-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'LevelList', {
                url: '/level/list',
                controller: 'LevelListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/level/level-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'LevelEdit', {
                url: '/level/edit/:id',
                controller: 'LevelEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/level/level-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'LevelView', {
                url: '/level/view/:id',
                controller: 'LevelViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/level/level-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'OccupationList', {
                url: '/occupation/list',
                controller: 'OccupationListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/occupation/occupation-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'OccupationEdit', {
                url: '/occupation/edit/:id',
                controller: 'OccupationEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/occupation/occupation-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'OccupationView', {
                url: '/occupation/view/:id',
                controller: 'OccupationViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/occupation/occupation-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionTypeList', {
                url: '/question-type/list',
                controller: 'QuestionTypeListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question-type/question-type-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionTypeEdit', {
                url: '/question-type/edit/:id',
                controller: 'QuestionTypeEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question-type/question-type-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionTypeView', {
                url: '/question-type/view/:id',
                controller: 'QuestionTypeViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question-type/question-type-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionList', {
                url: '/question/list',
                controller: 'QuestionListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question/question-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionEdit', {
                url: '/question/edit/:id',
                controller: 'QuestionEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question/question-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuestionView', {
                url: '/question/view/:id',
                controller: 'QuestionViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/question/question-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuizList', {
                url: '/quiz/list',
                controller: 'QuizListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/quiz/quiz-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuizEdit', {
                url: '/quiz/edit/:id',
                controller: 'QuizEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/quiz/quiz-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'QuizView', {
                url: '/quiz/view/:id',
                controller: 'QuizViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/quiz/quiz-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'RegionList', {
                url: '/region/list',
                controller: 'RegionListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/region/region-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'RegionEdit', {
                url: '/region/edit/:id',
                controller: 'RegionEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/region/region-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'RegionView', {
                url: '/region/view/:id',
                controller: 'RegionViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/region/region-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'subCategoryList', {
                url: '/sub-category/list',
                controller: 'SubCategoryListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/sub-category/sub-category-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'subCategoryEdit', {
                url: '/sub-category/edit/:id',
                controller: 'SubCategoryEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/sub-category/sub-category-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'subCategoryView', {
                url: '/sub-category/view/:id',
                controller: 'SubCategoryViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/sub-category/sub-category-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'SubjectList', {
                url: '/subject/list',
                controller: 'SubjectListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/subject/subject-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'SubjectEdit', {
                url: '/subject/edit/:id',
                controller: 'SubjectEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/subject/subject-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'SubjectView', {
                url: '/subject/view/:id',
                controller: 'SubjectViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/subject/subject-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'UserDetailsList', {
                url: '/user-details/list',
                controller: 'UserDetailsListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/user-details/user-details-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'UserDetailsEdit', {
                url: '/user-details/edit/:id',
                controller: 'UserDetailsEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/user-details/user-details-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'UserDetailsView', {
                url: '/user-details/view/:id',
                controller: 'UserDetailsViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/user-details/user-details-view-c.html'
            })
            .state(AAAL_BASE_STATE + 'usersList', {
                url: '/users/list',
                controller: 'UsersListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/users/users-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'usersEdit', {
                url: '/users/edit/:id',
                controller: 'UsersEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/users/users-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'usersView', {
                url: '/users/view/:id',
                controller: 'UsersViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/users/users-view-c.html'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;
    }
})();

