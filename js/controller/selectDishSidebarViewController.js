// selectDistViewController
var SelectDishSidebarViewController = function(view, model, stateController) {
	
	view.$plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(model.getNumberOfGuests());
	});

	view.$minusButton.click(function() {
		if(model.getNumberOfGuests() > 1) {
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
			console.log(model.getNumberOfGuests());
		}
	});

	view.$checkout.click(function() {
		stateController.hideAll();
		stateController.showOverview();
	});

}