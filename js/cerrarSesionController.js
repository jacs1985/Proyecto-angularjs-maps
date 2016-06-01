app.controller('cerrarSesionController', ['$scope','$uibModal',function($scope,$uibModal){	

	$scope.openModal = function (size){
	    var $uibModalInstance = $uibModal.open({
		    templateUrl: 'views/cerrarSesion.html',
		    controller: 'myModalController2',
		    size: size,
		    resolve: {
		    	Items: function() //scope del modal
		        {
		          	
		        }
		    }
	    });
	}
}]);

app.controller('myModalController2', ['$scope','$uibModalInstance','Items', function($scope, $uibModalInstance,user){
    $scope.cancel = function () {
    	$uibModalInstance.dismiss('cancel');
    };
    	
	$scope.aceptar = function () {
		 console.log("Sesion Cerrada");
		 $uibModalInstance.close($scope.selected);
	}
}]);