app.controller('userController', function($scope) {
    $scope.newUser = {
		name:"",
		rut:"",
		email:"",
		patente:""
	};
	$scope.users = [];
	
	
	$scope.addNewUser = function (user) {
		 console.log(user);
		 $scope.users.push(angular.extend({},user));		 
	}
	$scope.showDetails= function (user) {
		console.log(user);
	};

	$scope.cancel = function (){
    	$scope.location.path("/");
    };
});