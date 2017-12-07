'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
  .controller('DashboardCtrl', function($scope, $http, $q, $moment, Users, AccessTokens, BootcampResolved, dashboardServices){
    $scope.page = {
      title: 'Dashboard',
      subtitle: 'Edootech - Admin Panel'
    };

    $scope.stats = {
      loggedInUsers: 0,
      newUsers: 0,
      gamesPlayed: 0,
      premiumUsers: 0,
      totalUsers: 0
    };


    dashboardServices.loggedInUsers().then(function successCallback(response) {
      $scope.stats.loggedInUsers = response;
    });

    var countLoggedInUsers = function() {
      var defer = $q.defer();

      var loggedInUsers = AccessTokens.count(function() {
        defer.resolve(loggedInUsers.count);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };

    var countNewUsers = function() {
      var defer = $q.defer();

      var newUsers = Users.count({where: {created: {gte: $moment().subtract(1, 'days').format('YYYY-MM-DD').toString()}}}, function() {
        defer.resolve(newUsers.count);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };

    var countGamesPlayed = function() {
      var defer = $q.defer();

      var gamesPlayed = BootcampResolved.count(function() {
        defer.resolve(gamesPlayed.count);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };

    var countPremiumUsers = function() {
      var defer = $q.defer();

      var premiumUsers = Users.count(function() {
        defer.resolve(premiumUsers.count);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };

    var countTotalUsers = function() {
      var defer = $q.defer();

      var totalUsers = Users.count(function() {
        defer.resolve(totalUsers.count);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };


    countLoggedInUsers().then(function(res) {
      dashboardServices.loggedInUsers().then(function successCallback(response) {
        $scope.stats.loggedInUsers = response;
      });
    });
    countNewUsers().then(function(res) {
      $scope.stats.newUsers = res;
    });
    countGamesPlayed().then(function(res) {
      dashboardServices.gamesPlayed().then(function successCallback(response) {
        $scope.stats.gamesPlayed = response;
      });
    });
    countPremiumUsers().then(function(res) {
      $scope.stats.premiumUsers = res;
    });
    countTotalUsers().then(function(res) {
      $scope.stats.totalUsers = res-2;
    });


    $scope.refreshCountLoggedInUsers = function() {
      countLoggedInUsers().then(function(res) {
        $scope.stats.loggedInUsers = res;
      });
    };
    $scope.refreshCountNewUsers = function() {
      countNewUsers().then(function(res) {
        $scope.stats.newUsers = res;
      });
    };
    $scope.refreshCountGamesPlayed = function() {
      countGamesPlayed().then(function(res) {
        $scope.stats.gamesPlayed = res;
      });
    };
    $scope.refreshCountPremiumUsers = function() {
      countPremiumUsers().then(function(res) {
        $scope.stats.premiumUsers = res;
      });
    };
    $scope.refreshCountTotalUsers = function() {
      countTotalUsers().then(function(res) {
        $scope.stats.totalUsers = res-2;
      });
    };





    $scope.getUsers = function(){
      $scope.data=[];
      var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=3&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function(data){
          $scope.data=data;
      });
    };

    $scope.getUsers();


  })

  .controller('StatisticsChartCtrl', function ($scope, $moment, $q, _, Users) {
    var self = this;
    console.log("$moment " ,$moment);
    self.startDate = $moment().startOf('month').format('MMMM D, YYYY');
    self.endDate = $moment().endOf('month').format('MMMM D, YYYY');
    self.rangeOptions = {
      ranges: {
        Today: [$moment(), $moment()],
        Yesterday: [$moment().subtract(1, 'days'), $moment()],
        'This Week': [$moment().startOf('week'), $moment().endOf('week')],
        'Last Week': [$moment().subtract(1, 'week').startOf('week'), $moment().subtract(1, 'week').endOf('week')],
        'This Month': [$moment().startOf('month'), $moment().endOf('month')],
        'Last Month': [$moment().subtract(1, 'month').startOf('month'), $moment().subtract(1, 'month').endOf('month')]
      },
      showCustomRangeLabel: false,
      opens: 'left',
      startDate: $moment().startOf('month'),
      endDate: $moment().endOf('month'),
      parentEl: '#content'
    };

    self.dataset = [];

    self.options = {
      colors: ['#e05d6f','#61c8b8'],
      series: {
        shadowSize: 0
      },
      legend: {
        backgroundOpacity: 0,
        margin: -7,
        position: 'ne',
        noColumns: 2
      },
      xaxis: {
        tickLength: 0,
        font: {
          color: '#fff'
        },
        position: 'bottom',
        ticks: []
      },
      yaxis: {
        tickLength: 0,
        font: {
          color: '#fff'
        }
      },
      grid: {
        borderWidth: {
          top: 0,
          right: 0,
          bottom: 1,
          left: 1
        },
        borderColor: 'rgba(255,255,255,.3)',
        margin:0,
        minBorderMargin:0,
        labelMargin:20,
        hoverable: true,
        clickable: true,
        mouseActiveRadius:6
      },
      tooltip: true,
      tooltipOpts: {
        content: '%s: %y',
        defaultTheme: false,
        shifts: {
          x: 0,
          y: 20
        }
      }
    };

    self.getUsersByDate = function(startDate, endDate, isPremium) {
      isPremium = isPremium || false;

      var defer = $q.defer();
      var users = Users.find({filter: {where: {lastActive: {between: [startDate, endDate]}}}}, function() {
        defer.resolve(users);
      }, function(error) {
        defer.reject(error);
      });

      return defer.promise;
    };

    $scope.$watch('stats.startDate', function(newValue, oldValue) {
      var endDate = $moment(self.endDate, 'MMMM D, YYYY');
      var startDate = $moment(self.startDate, 'MMMM D, YYYY');
      var days = endDate.diff(startDate, 'days');

      self.getUsersByDate(startDate.format('YYYY-MM-DD').toString(), endDate.format('YYYY-MM-DD').toString()).then(function(users) {
        users = _.orderBy(users, ['created'], ['asc']);
        var gUsers = _.groupBy(users, 'created');
        gUsers = _.toArray(gUsers);

        var userData = [];
        switch(days) {
          case 0:
            _.forEach(gUsers, function(user, i) {
              userData.push([i, user.length]);
            });
            break;
          case 1:
            _.forEach(gUsers, function(user) {
              var idx = 0;
              if($moment(user[0].created, 'YYYY-MM-DD').isSame($moment())) {
                idx = 1;
              }
              userData.push([idx, user.length]);
            });
            break;

          case 6:
            _.forEach(gUsers, function(user) {
              userData.push([$moment(user[0].created, 'YYYY-MM-DD').weekday() + 1, user.length]);
            });
            for(var i=1; i<=6; i++) {
              if( _.findIndex(userData, [0, i]) === -1 ) {
                userData.push([i, 0]);
              }
            }
            break;

          default:
            _.forEach(gUsers, function(user) {
              userData.push([parseInt($moment(user[0].created, 'YYYY-MM-DD').format('D').toString()), user.length]);
            });
            for(var i=1; i<=days; i++) {
              if( _.findIndex(userData, [0, i]) === -1 ) {
                userData.push([i, 0]);
              }
            }
            break;
        }
        userData = _.orderBy(userData, [0], ['asc']);
        self.dataset = [];
        self.dataset.push(
          {
            data: userData,
            label: 'New Users',
            points: {
              show: true,
              radius: 4
            },
            splines: {
              show: true,
              tension: 0.25,
              lineWidth: 4,
              fill: 0
            }
          }
        );
      });

      self.options.xaxis.ticks = [];
      switch(days) {
        case 0:
          self.options.xaxis.ticks.push([1, 'TODAY']);
          break;

        case 1:
          self.options.xaxis.ticks.push([1, 'YESTERDAY']);
          self.options.xaxis.ticks.push([2, 'TODAY']);
          break;

        case 6:
          for(var i=0; i<=days; i++) {
            self.options.xaxis.ticks.push([i+1, $moment().isoWeekday(i).format('ddd').toUpperCase()]);
          }
          break;

        default:
          for(var i=1; i<=days; i++) {
            self.options.xaxis.ticks.push([i, i]);
          }
          break;
      }
    });
  })

  