// selectDistViewController
var SelectDishViewController = function(view, model, stateController) {

	view.$select.change(function() {
		view.update(view.$select.val());
	});

	view.$main.on("click", ".dishclick", function() {
		stateController.hideAll();
		stateController.showSidebar();
		stateController.showDishInfo($(this).attr("id"));
	});

	view.$dishSearch.on("keyup", function(event) {
		if (event.keyCode == '13') {
			view.update(view.$select.val(), $(this).val());
		}
	});

}