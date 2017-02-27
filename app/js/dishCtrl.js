// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  	$scope.roundHalf = function(num) {
		return Math.round(num*2)/2;
	}

  	$scope.status = "Loading...";
  	Dinner.Dish.get({id:$routeParams.dishId}, function(dish) {
  		$scope.dish = dish;
  		$scope.status = "";		
  	}, function(error) {
  		$scope.status = "There was an error loading dish information.";
  	});

  	$scope.summaryStatus = "Loading...";
  	Dinner.DishSummary.get({id:$routeParams.dishId}, function(dish) {
		$scope.dish.summary = dish.summary;
		$scope.summaryStatus = "";
	}, function(error) {
		$scope.summaryStatus = "There was an error loading dish summary.";
	});

  	//$scope.dishInformation();
  	//$scope.dishSummary();

});