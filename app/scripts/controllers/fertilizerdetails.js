'use strict';

/**
 * @ngdoc function
 * @name agriWebAppApp.controller:AboutCtrl
 * @description
 * #FertilizerdetailsCtrl
 * Controller of the agriWebAppApp
 */
angular.module('agriWebAppApp')
  .controller('FertilizerdetailsCtrl', ['$scope','myService',  function ($scope,myService){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);