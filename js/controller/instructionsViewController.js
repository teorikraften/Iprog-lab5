// instructionsViewController
var InstructionsViewController = function(view, model, stateController) {
	view.$panelheadingButton.click(function() {
		stateController.hideAll();
		stateController.showOverview();
	});

}
