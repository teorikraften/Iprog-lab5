$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	
	//And create the needed controllers and views
	var instructionsView = new InstructionsView($("#container"), model);
	var dinnerOverview = new DinnerOverview($("#container"), model);
	var selectDishView = new SelectDishView($("#container"), model);
	var selectDishSidebarView = new SelectDishSidebarView($("#container"), model);
	var dishInformationView = new DishInformationView($("#dishdetails"), model);
	
	

});