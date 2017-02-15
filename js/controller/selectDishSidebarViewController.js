// selectDistViewController
var SelectDishSidebarViewController = function(view, model) {
	
	view.$plusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(model.getNumberOfGuests());
	});

	view.$minusButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		console.log(model.getNumberOfGuests());
	});

}