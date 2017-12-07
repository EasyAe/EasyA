(function () {
    angular.module('usersEasyA+')
        .service('UserService', function ($http) {
            return {
                getUserData: function (id) {

                    //FE
                    return {
                        name: 'Martina H.',
                        fullname: 'Martina Larsen',
                        username: 'Martina3030',
                        avatar: 'https://placeholdit.imgix.net/~text?txtsize=11&txt=117%C3%97117&w=117&h=117',
                        school: 'Øregård Gymnasium (STX)',
                        rol: 'Student',
                        slogan: '"I`m gonna kick butt!"',
                        city:'Sjaelland',
                        totalPoints: {
                            day: '2600',
                            month: '8100'
                        },
                        totalBattles:{
                            total: 64,
                            details:[{
                                title: 'Won',
                                value: 22,
                                color: '#83bc5c',
                                percent: 22
                            },{
                                title: 'Lost',
                                value: 10,
                                color: '#d43e4c',
                                percent: 10
                            },{
                                title: 'Tied',
                                value: 32,
                                color: '#58cce9',
                                percent: 32
                            }]
                        },
                        rankings: [{
                            title: 'High School',
                            color: 'danger',
                            rank: '62nd',
                            percent: '62'
                        }, {
                            title: 'Regional',
                            color: 'success',
                            rank: '62nd',
                            percent: '62'
                        }, {
                            title: 'National',
                            color: 'info',
                            rank: '62nd',
                            percent: '62'
                        }]
                    };

                    //BE
                }
            };
        });
})();
