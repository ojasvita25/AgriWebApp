'use strict';

/**
 * @ngdoc function
 * @name agriWebAppApp.controller:AboutCtrl
 * @description
 * # FertilizersCtrl
 * Controller of the agriWebAppApp
 */
angular.module('agriWebAppApp').controller('FertilizersCtrl',['$scope','$http','$rootScope','myService',  function ($scope, $http,$rootScope,myService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.FertDetails= [];
    
   // myService.addProduct(SharedData);
    $scope.showdetails1=function(names){
    	$rootScope.fertName = names;
    	$rootScope.amountType= "Available";
      console.log('clicked submit');
      $http({
        url: 'http://10.21.211.193:3000/fetchfertilizersupply',
        method: 'POST',
         data:{
        	names:names
        }
    }).then(function (httpResponse) {
   $rootScope.FertmoreDetails=httpResponse.data;
     console.log('response:', httpResponse);
    });
    };
    $scope.showdetails2=function(names){
    	$rootScope.fertName = names;
    	$rootScope.amountType= "Requested";
      console.log('clicked submit');
      $http({
        url: 'http://10.42.25.251:3000/fetchfertilizerdemand',
        method: 'POST',
         data:{
        	names:names
        }
    }).then(function (httpResponse) {
   $rootScope.FertmoreDetails=httpResponse.data;
     console.log('response:', httpResponse);
    });
    };

    $scope.showfertilizers=function(){

      console.log('clicked submit');
      $http({
        url: 'http://10.42.25.251:3000/fetchfertilizers',
        method: 'POST',
    }).then(function (httpResponse) {
    $scope.FertDetails= httpResponse.data;
     console.log('response:', httpResponse.data);
    });
    };
  }]);

