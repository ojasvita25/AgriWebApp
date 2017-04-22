'use strict';

/**
 * @ngdoc function
 * @name agriWebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agriWebAppApp
 */
angular.module('agriWebAppApp')
  .controller('AboutCtrl', function ($scope,$http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


     $scope.message = " ";
    $scope.submitmessage=function(){
      console.log('clicked submit');
      $http({
        url: 'https://api.plivo.com/v1/Account/{auth_id}/Message/',
        method: 'POST',
        
        data:{
          mssg: $scope.message
        }
    }).then(function (httpResponse) {
     console.log('response:', httpResponse);
    });
    };
  });
