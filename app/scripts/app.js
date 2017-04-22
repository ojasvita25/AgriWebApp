'use strict';

/**
 * @ngdoc overview
 * @name agriWebAppApp
 * @description
 * # agriWebAppApp
 *
 * Main module of the application.
 */
var myapp = angular
  .module('agriWebAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mcwebb.twilio'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: '/about'
      })
      .when('/Fertilizers',{
        templateUrl: 'views/Fertilizers.html',
        controller: 'FertilizersCtrl',
        controllerAs: '/Fertilizers'
      })
      .when('/crops', {
        templateUrl: 'views/crops.html',
        controller: 'CropCtrl',
        controllerAs: '/crops'  
            })
       .when('/cropdetails', {
        templateUrl: 'views/cropdetails.html',
        controller: 'CropdetailsCtrl',
        controllerAs: '/cropdetails'  
            })
       .when('/fertilizerdetails', {
        templateUrl: 'views/fertilizerdetails.html',
        controller: 'FertilizerdetailsCtrl',
        controllerAs: '/fertilizerdetails'  
            })
       .when('/seeddetails', {
        templateUrl: 'views/seedDetails.html',
        controller: 'seeddetailsCtrl',
        controllerAs: '/seeddetails'  
            })
       .when('/SalesPoint', {
        templateUrl: 'views/SalesPoint.html',
        controller: 'SalesPointCtrl',
        controllerAs: '/SalesPoint'  
            })
        .when('/SubSalesPoint', {
        templateUrl: 'views/SubSalesPoint.html',
        controller: 'SubSalesPointCtrl',
        controllerAs: '/SubSalesPoint'  
            })
      .otherwise({
        redirectTo: '/'
      });
  });

myapp.factory('myService', function() {
 var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});