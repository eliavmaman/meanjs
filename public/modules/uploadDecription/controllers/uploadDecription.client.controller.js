'use strict';

angular.module('uploadDecription').controller('UploadDecriptionController',
          ['$scope', '$http', '$location', 'Authentication', '$timeout',
  function ($scope, $http, $location, Authentication, $timeout) {
    $scope.authentication = Authentication;

    // If user is signed in then redirect back home
    //   if ($scope.authentication.user) $location.path('/');
    $scope.displaySucces = false;
    $scope.credentials = {
      languages: [],
      s3OptionsUri: '/s3upload',
      image: null
    };

    $scope.$watch('credentials.image', function (newValue, oldValue) {
      if (newValue) {
        $scope.newDecription.images.push(newValue);
        $scope.credentials.image = null;
      }
    });

    $scope.newDecription = {
      name: '',
      images: [],
      email: ''
    };

    $scope.createDecription = function () {
      $http.post('/decriptions', $scope.newDecription).success(function (response) {

        $scope.displaySucces = true;
        $scope.newDecription = {
          name: '',
          images: [],
          email: ''
        };

        $timeout(function () {
          $scope.displaySucces = false;
        }, 2000);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
