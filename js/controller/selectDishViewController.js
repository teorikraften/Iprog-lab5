// selectDistViewController
var SelectDishViewController = function(view, model, stateController) {
	
	view.$select.change(function() {
		view.update(view.$select.val());
	});

	$(".dishclick").on("click", function() {
		stateController.hideSelectDish();
		stateController.showInformation();
	});

}