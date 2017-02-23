// selectDistViewController
var SelectDishViewController = function(view, model, stateController) {
	
	$(document).on({
		ajaxStart: function() { 
			view.disherino.children().hide();
			view.$loading.show(); 
		},
		ajaxStop: function() { 
			view.disherino.children().show(); 
			view.$loading.hide();
		}
	});

	view.$select.change(function() {
		view.update(view.$select.val());
	});

	$(document).on("click", ".dishclick", function() {
		stateController.hideAll();
		stateController.showSidebar();
		stateController.showDishInfo($(this).attr("id"));
	});

	$("#searchDish").on("keyup", function(event) {
		if (event.keyCode == '13') {
			view.update(view.$select.val(), $(this).val());
		}
	});

}