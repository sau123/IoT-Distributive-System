app.controller('RegisterController', function($scope, $http, $location) { 

$scope.endPoint='';
$scope.serialNumber='';
	
	
	$scope.processForm = function() {
		 $http({
		 method  : 'POST',
		 url     : "rest/jsonservices/registerDevice",
		 data    : $.param({
		       endPoint : $scope.endPoint, 
		       serialNumber : $scope.serialNumber
		 }),  
		 headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
		}).success(function (data) {
			$location.path('/success');			
			console.log('data');
		})
		.error(function(data) {
		console.log('error');
		});	
	}
	
	
	
})