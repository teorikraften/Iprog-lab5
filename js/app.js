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
	var selectDishSidebarView = new SelectDishSidebarView($("#content"), model);
	var dinnerOverview = new DinnerOverview($("#content"), model);
	var instructionsView = new InstructionsView($("#content"), model);
	var selectDishView = new SelectDishView($("#content"), model);
	var dishInformationView = new DishInformationView($("#content"), model);
	
	
	// State controller
	var stateController = new StateController(selectDishView, 
											  selectDishSidebarView,
											  dinnerOverview);
	// Controllers
	var selectDishViewController = new SelectDishViewController(selectDishView, model, stateController);
	var selectDishSidebarViewController = new SelectDishSidebarViewController(selectDishSidebarView, model, stateController);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview, model, stateController);


});