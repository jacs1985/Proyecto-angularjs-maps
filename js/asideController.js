app.controller('asideController', function($scope, $aside) {
	
	$scope.asideState = {
		open: false
	};
	
	$scope.openAside = function(position, backdrop) {
	  	$scope.asideState = {
			open: true,
			position: position
		};
	  
		function postClose() {
			$scope.asideState.open = false;
		}
	  
		$aside.open({
			templateUrl: 'views/aside.html',
			placement: position,
			size: 'sm',
			backdrop: backdrop
		})
	}
});