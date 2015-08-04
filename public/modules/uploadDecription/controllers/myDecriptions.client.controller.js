'use strict';

angular.module('uploadDecription').controller('MyDecriptionController',
  ['$scope', '$http', '$location', 'Authentication', '$timeout',
    function ($scope, $http, $location, Authentication, $timeout) {
      $scope.authentication = Authentication;

      // If user is signed in then redirect back home
      //   if ($scope.authentication.user) $location.path('/');

      $scope.init = function () {
        $scope.getUserDecription();
      };
      $scope.getUserDecription = function () {
        $http.get('/decriptions', {params: {email: $scope.authentication.user.email}}).success(function (response) {


          var decriptionList = response;
          for (var i = 0; i < decriptionList.length; i++) {
            var d = new Date(decriptionList[i].created);
            var formatedDate = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
            decriptionList[i].created = formatedDate;
          }
          $scope.decriptions = decriptionList;


        }).error(function (response) {
          $scope.error = response.message;
        });
      };
    }
  ]);
