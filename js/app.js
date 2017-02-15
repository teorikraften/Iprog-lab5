$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	model.setNumberOfGuests(3);
	
	//And create the needed controllers and views

	// Views
	var navBarView = new NavBarView($("#navbar-container"), model);
	var instructionsView = new InstructionsView($("#container"), model);
	var dinnerOverview = new DinnerOverview($("#container"), model);
	var selectDishView = new SelectDishView($("#content"), model);
	var selectDishSidebarView = new SelectDishSidebarView($("#container"), model);
	var dishInformationView = new DishInformationView($("#content"), model);
	
	// Controllers
	var stateController = new StateController();
	var selectDishViewController = new SelectDishViewController(selectDishView, model);
	var selectDishSidebarViewController = new SelectDishSidebarViewController(selectDishSidebarView, model);
	

});