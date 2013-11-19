var myApp = angular.module('myApp', []);

myApp.controller ('SomeController', function ($scope) {
	
	$scope.data = {
		adding: false,
		items: [
			{
				name: "Vibrator",
				price: 3.20,
				count: 3
			},
			{
				name: "Strap-on",
				price: 5.40,
				count: 5
			}
		]
	};

	$scope.removeItem = function(index) {
		$scope.data.items.splice(index, 1);
	}

	$scope.addItem = function() {
		$scope.data.items.push ({
			name: "", price: 0, count: 0
		});
	}

	$scope.addNewItem = function(newItem) {
		$scope.data.items.push(newItem);
		$scope.data.adding = false;
	}
});