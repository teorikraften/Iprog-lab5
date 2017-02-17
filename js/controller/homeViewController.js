// homeViewController
var HomeViewController = function(view, model, stateController) {
	//press button hide view + show slectDishes and selectDishesSidebar
	$("#homeButton").click(function() {
		stateController.hideAll();
		stateController.showNavbar();
		stateController.showSidebar();
		stateController.showSelectDish();
	});
}
