'use strict';

/**
 * @ngdoc function
 * @name agriWebAppApp.controller:AboutCtrl
 * @description
 * #seeddetailsCtrl
 * Controller of the agriWebAppApp
 */
angular.module('agriWebAppApp')
  .controller('seeddetailsCtrl',['$scope','$http', function ($scope, $http){
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.SeedDetails=[
{
	"typeOfSeed":"xyz",
	"quantityAvailable":"6",
	"quantityRequired":"5"
},
{
    "typeOfSeed":"abc",
	"quantityAvailable":"10",
	"quantityRequired":"5"
}
    ];
 }]);