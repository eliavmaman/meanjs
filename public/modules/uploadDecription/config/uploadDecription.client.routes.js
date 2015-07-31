'use strict';

// Setting up route
angular.module('uploadDecription').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider.

      state('uploadDecription', {
        url: '/uploadDecription',
        templateUrl: 'modules/uploadDecription/views/uploadDecription.client.view.html'

      }).
      state('myDecription', {
        url: '/myDecription',
        templateUrl: 'modules/uploadDecription/views/myDecription.client.view.html'
      });

  }
]);
