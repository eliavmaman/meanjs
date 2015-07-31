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

        $scope.decriptions = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
