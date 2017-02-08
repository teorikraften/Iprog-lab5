$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var selectDishView = new SelectDishView($("#container"), model);
	var selectDishSidebarView = new SelectDishSidebarView($("#container"), model);

});