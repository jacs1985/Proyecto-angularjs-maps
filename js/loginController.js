app.controller('loginController', ['$scope','$uibModal',function($scope,$uibModal){
	$scope.openModal = function (size) {
	    var $uibModalInstance = $uibModal.open({
		    templateUrl: 'views/login.html',
		    controller: 'myModalController',
		    size: size,
		    resolve: {
		    	Items: function(){
		          	
		        }
		    }
	    });
	}
}]);

app.controller('myModalController', ['$scope','$uibModalInstance', function($scope, $uibModalInstance)
{
    $scope.newUser = {
		usuario:"",
		contrasena:""
	};

	$scope.users = [
		{nombre: "nombre1",
		usuario: "usuario1",
		contrasena: "contrasena1"},

		{nombre: "nombre2",
		usuario: "usuario2",
		contrasena: "contrasena2"},

		{nombre: "nombre3",
		usuario: "usuario3",
		contrasena: "contrasena3"}
	];
	
	$scope.ingresar = function (user) {
		if ( user.usuario === "usuario1"  && user.contrasena === "contrasena1") {
			console.log("El usuario: "+user.usuario+" ha ingresado correctamente");
			$uibModalInstance.close($uibModalInstance);
		}
	}

    $scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
    };
    $scope.cargarForm = function ($scope) {
    	$uibModalInstance.close($uibModalInstance);
    }
}]);