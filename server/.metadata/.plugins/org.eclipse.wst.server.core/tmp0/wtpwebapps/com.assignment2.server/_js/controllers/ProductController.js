app.controller('ProductController', ['$scope', function($scope) { 
	$scope.products = [ 
{ 
	name: 'Air Conditioner', 
	cover: '_images/AC.jpg'	
},
{ 
	name: 'Thermostat', 
	cover: '_images/thermostat.jpg'	
},
{
	name: 'Refrigerator', 
	cover: '_images/refrigerator.jpg' 
},
{
	name: 'Door lock', 
	cover: '_images/doorLock.jpg' 
}
]
}])