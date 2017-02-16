// dinnerOverviewController
var DinnerOverviewController = function(view, model, stateController) {
	//test to see if updating correctly
	view.$panelHeadingButton.click(function() {
		stateController.hideOverview();
		stateController.showSidebar();
		stateController.showSelectDish();
	});

}
