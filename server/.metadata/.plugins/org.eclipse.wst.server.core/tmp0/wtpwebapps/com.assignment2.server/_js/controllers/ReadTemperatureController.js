app.controller('ReadTemperatureController', function($scope, $http, $location, $rootScope) { 
	
	$scope.getTemperature = function() {
		 $http({
		 method  : 'GET',
		 url     : "rest/jsonservices/read/Temperature",
		 headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$rootScope.readTemp1 = data;
			$location.path('/temperature')
			console.log(data);
		})
		.error(function(data) {
		console.log('error');
		});
	
	}
	
	$scope.getPressure = function() {
		 $http({
		 method  : 'GET',
		 url     : "rest/jsonservices/read/Pressure",
		 headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$rootScope.readPres = data;
			$location.path('/pressure')
			console.log(data);
		})
		.error(function(data) {
		console.log('error');
		});
	
	}
	
	$scope.getDiscover = function() {
		 $http({
		 method  : 'GET',
		 url     : "rest/jsonservices/discover",
		 headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$rootScope.discov = data;
			$location.path('/discover')
			console.log(data);
		})
		.error(function(data) {
		console.log('error');
		});	
	}
	
	$scope.getExecute = function() {
		 $http({
		 method  : 'GET',
		 url     : "rest/jsonservices/execute",
		 headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$rootScope.exec = data;
			$location.path('/execute')
			console.log(data);
		})
		.error(function(data) {
		console.log('error');
		});	
	}

	
	
})