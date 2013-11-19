var myApp = angular.module('myApp', []);

myApp.controller ('SomeController', function ($scope) {
	
	$scope.master = {};

	$scope.reset = function() {
		$scope.master = {};
		$scope.user = {};
	}

	$scope.save = function(user) {
		$scope.master = angular.copy(user);
	}
});