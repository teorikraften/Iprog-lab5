// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$timeout) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price
  $scope.addDishToMenu = function(dish) {
  	Dinner.addDishToMenu(dish);
  	$scope.successMessage = "Added <strong>" + dish.title + "</strong> to menu!";
  	$scope.showSuccess = true;
  	$timeout(function() {$scope.showSuccess = false;}, 5000);
  }

  $scope.removeDishFromMenu = function(id) {
  	Dinner.removeDishFromMenu(id);
  }

  $scope.getFullMenu = function() {
  	return Dinner.getFullMenu();
  }

  $scope.getTotalMenuPrice = function() {
  	return Dinner.getTotalMenuPrice();
  }

  $scope.getDishPrice = function(id) {
  	return Dinner.getDishPrice(id);
  }

  $scope.getDishInstructions = function(dishID) {
    return Dinner.DishInstructions.get({id:dishID});
  }

});