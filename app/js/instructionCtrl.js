dinnerPlannerApp.controller('InstructionCtrl', function ($scope,Dinner,menuSharing) {

	$scope.getDishInstructions = function(menu) {
		$scope.instructionMessage = "Loading instructions...";
		menu.forEach(function(dish,index) {
			console.log(index);
			Dinner.DishInstructions.query({id:dish.id}, function(data) {
				dish.steps = data[0].steps;
    			$scope.instructionMessage = "";
    		}, function(data) {
    			$scope.instructionMessage = "There was an error loading instructions.";
    		});
    	});
  	}

});