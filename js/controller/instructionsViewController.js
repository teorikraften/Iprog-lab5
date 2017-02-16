// instructionsViewController
var InstructionsViewController = function(view, model) {
	//test to see if updating correctly
	view.$panelheadingButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		alert(model.getNumberOfGuests());
	});

}
