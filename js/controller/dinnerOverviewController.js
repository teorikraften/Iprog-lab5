// dinnerOverviewController
var DinnerOverviewController = function(view, model) {
	//test to see if updating correctly
	view.$panelHeadingButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		alert(model.getNumberOfGuests());
	});

}
