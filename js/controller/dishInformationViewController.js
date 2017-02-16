// dishInformationViewController
var DishInformationViewController = function(view, model, stateController) {
	
	$("#addDish").click(function() {
		model.addDishToMenu($(this).attr("id"));
	});
}
