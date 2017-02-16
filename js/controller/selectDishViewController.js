// selectDistViewController
var SelectDishViewController = function(view, model, stateController) {
	
	view.$select.change(function() {
		view.update(view.$select.val());
	});

	$(document).on("click", ".dishclick", function() {
		stateController.hideAll();
		stateController.showSidebar();
		stateController.showDishInfo($(this).attr("id"));
	});

}