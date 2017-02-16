$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(200);
	model.setNumberOfGuests(3);
	
	//And create the needed controllers and views

	// Views
	var homeView = new HomeView($("#content"), model);
	var navBarView = new NavBarView($("#navbar-container"), model);
	var selectDishSidebarView = new SelectDishSidebarView($("#content"), model);
	var selectDishView = new SelectDishView($("#content"), model);
	var dinnerOverview = new DinnerOverview($("#content"), model);
	var dishInformationView = new DishInformationView($("#content"), model);
	var instructionsView = new InstructionsView($("#content"), model);
	
	
	// State controller
	var stateController = new StateController(homeView,
											  selectDishView, 
											  selectDishSidebarView,
											  dinnerOverview,
											  dishInformationView,
											  instructionsView);

	stateController.hideAll();
	stateController.showHome();

	// Controllers
	var homeViewController = new HomeViewController(homeView, model, stateController);
	var selectDishViewController = new SelectDishViewController(selectDishView, model, stateController);
	var selectDishSidebarViewController = new SelectDishSidebarViewController(selectDishSidebarView, model, stateController);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview, model, stateController);


});