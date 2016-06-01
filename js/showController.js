app.controller('showController', ['$scope', function($scope){
	
	$scope.users = [
		{nombre: "nombre 1",
		usuario: "usuario 1",
		contrasena: "contrasena 1"},

		{nombre: "nombre 2",
		usuario: "usuario 2",
		contrasena: "contrasena 2"},

		{nombre: "nombre 3",
		usuario: "usuario 3",
		contrasena: "contrasena 3"}
	];

	$scope.editar = function (argument) {
		 console.log("Editando");
	}
 
 	$scope.eliminar = function (argument) {
 		 console.log("Eliminando");
 	}
}])