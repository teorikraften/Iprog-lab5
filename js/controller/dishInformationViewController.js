// dishInformationViewController
var DishInformationViewController = function(view, model, stateController) {

	view.$button.on('click', function() {
		model.addDishToMenu(view.dishID);
		$('<div><h4>Added <b>' + view.dish.name + '</b> to menu!</h4></div>').addClass("alert alert-success text-center").insertBefore('.media').delay(3000).fadeOut();
	});

	view.$back.click(function() {
		stateController.hideAll();
		stateController.showSidebar();
		stateController.showSelectDish();
	});
}
