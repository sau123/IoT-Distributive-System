
app.controller('EnergyConsumptionController',  function($scope, $http, $location, $rootScope) {

	startFunction();
	
		$scope.optimize = function(){
		// code to optimize
		// max temp = 30, max pressure = 115, max voltage = 50
		// so changing the code 
		// if temp < 15, make it 15,
		// if pres > 57, make it 57
		// if voltage > 25, make it 25		

		var attributes = new  Array("temp", "pres", "volt"); // havent used soo far 
		var deviceTypes = new Array("AC", "Thermostat", "Refrigerator");  // havent used soo far 

		var devType=0;
		for (var i = 0;i<3;i++)
		{
			if (i==0)
				devType = "ClientAC";  // same as that in mongo file 
			else if (i==1)
				devType = "ClientThermostat";
			else if (i==2)
				devType = "ClientFridge";
			console.log("Devtype : " + devType);

			if (Number($scope.products[i].temperature)<15)
			{
				$scope.products[i].temperature =15;
					writeTemperature();
					function writeTemperature() {
					$http({
						method  : 'POST',
						url     : "rest/jsonservices/write",
						data    : $.param({
							deviceType : devType, 
							attribute : "Temperature",
							newValue : "15"
						}),  
						headers : { 
								'Content-Type': 'application/x-www-form-urlencoded' 
								}  
					}).success(function (data) {						
					})
					.error(function(data) {
						console.log('error');
					});	
				}
			}

			if (Number($scope.products[i].pressure)>57)
			{
				$scope.products[i].pressure =57;
				writePressure();
				function writePressure() {
					$http({
						method  : 'POST',
						url     : "rest/jsonservices/write",
						data    : $.param({
							deviceType : devType, 
							attribute : "Pressure",
							newValue : "57"
						}),  
						headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
					}).success(function (data) {						
					})
					.error(function(data) {
						console.log('error');
					});	
				}
			}
			if (Number($scope.products[i].voltage)>25)
			{
				$scope.products[i].voltage =25;
				writeVoltage();
				function writeVoltage() {
					$http({
						method  : 'POST',
						url     : "rest/jsonservices/write",
						data    : $.param({
							deviceType : devType, 
							attribute : "Voltage",
							newValue : "25"
						}),  
						headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
					}).success(function (data) {						
					})
					.error(function(data) {
						console.log('error');
					});	
				}
			}
//			store();
		}
		 // so that the values are changed Although not needed
	}

	function startFunction(){
		startTemperatureThermostat();
		startPressureThermostat();
		startVoltageThermostat();

		startTemperatureAC();		
		startPressureAC();
		startVoltageAC();

		startTemperatureRefrigerator();
		startPressureRefrigerator();
		startVoltageRefrigerator();		
	}	

	function startTemperatureThermostat(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Temperature-Thermostat",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.tempThermostat = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startPressureThermostat(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Pressure-Thermostat",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.presThermostat = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startVoltageThermostat(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Voltage-Thermostat",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.voltThermostat = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startTemperatureAC(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Temperature-AC",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.tempAC = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startPressureAC(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Pressure-AC",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.presAC = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startVoltageAC(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Voltage-AC",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.voltAC = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startTemperatureRefrigerator(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Temperature-Refrigerator",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.tempRefrigerator = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startPressureRefrigerator(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Pressure-Refrigerator",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.presRefrigerator = data;
		})
		.error(function(data) {
			console.log('error');
		});
	}

	function startVoltageRefrigerator(){
		$http({
			method  : 'GET',
			url     : "rest/jsonservices/read/Voltage-Refrigerator",
			headers : { 'Content-Type': 'application/xml'}  
		}).success(function (data) {
			$scope.voltRefrigerator = data;
			store();
		})
		.error(function(data) {	
			console.log('error');
		});
	}	

	function store(){
		$scope.products = [ 
{ 	
	name: 'Air Conditioner', 
	cover: '_images/AC.jpg',
	temperature: $scope.tempAC,
	pressure: $scope.presAC,
	voltage: $scope.voltAC,
},
{ 
	name: 'Thermostat', 
	cover: '_images/thermostat.jpg',
	temperature: $scope.tempThermostat,
	pressure: $scope.presThermostat,
	voltage: $scope.voltThermostat,
},
{
	name: 'Refrigerator', 
	cover: '_images/refrigerator.jpg',
	temperature: $scope.tempRefrigerator,
	pressure: $scope.presRefrigerator,
	voltage: $scope.voltRefrigerator,
}
]
	}
})