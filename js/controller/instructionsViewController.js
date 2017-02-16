// instructionsViewController
var InstructionsViewController = function(view, model) {
	view.$panelheadingButton.click(function() {
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		alert(model.getNumberOfGuests());
	});

}
