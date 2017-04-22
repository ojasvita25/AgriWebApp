'use strict';

/**
 * @ngdoc function
 * @name agriWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agriWebAppApp
 */
angular.module('agriWebAppApp')
  .controller('MainCtrl',['$scope','$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.name = " ";
    $scope.pass=" ";
    $scope.submit=function(){
    	console.log('clicked submit');
    	$http({
        url: 'http://10.42.25.251:3000/login',
        method: 'POST',
        data:{
        	name: $scope.name,
        	pass:$scope.pass,

        	details: $scope.details
        }
    }).then(function (httpResponse) {
     console.log('response:', httpResponse);
    });
    };
 //   var url = 'https://spreadsheets.google.com/feeds/list/1QVaWNnyKUsosQziUrwheeDe9hEnu-pXnqF2ITXMRa2s/1/public/values?alt=json'
 //   var parse = function(entry){
 //   	console.log(entry);
 //   	var name = entry['gsx$name']['$t'];
 //   	var details = entry['gsx$details']['$t'];

 //   	var phno = entry['gsx$phno']['$t'];
 //   	return{
 //   		name : name,
 //   		details : details,
 //   		phno: phno,
 //   		url:url
 //   	};
 //   }
 // $http.get(url).then(function(response){
 //        		var data =response['feed']['entry'];
 //        		$scope.farmer_details = [ ];
 //        		for(key in data){
 //        			var content = data[key];
 //        			$scope.farmer_details.push(parse(content));
 //        		}
 //        	});
  }]);
