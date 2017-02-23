// dishInformationViewController
var DishInformationViewController = function(view, model, stateController) {

	$(document).on({
		ajaxStart: function() { 
			view.$panelBigBody.children().hide();
			view.$loading.show(); 
		},
		ajaxStop: function() { 
			view.$panelBigBody.children().show(); 
			view.$loading.hide();
		}
	});

	$(document).on('click', '#addDish', function() {
		model.addDishToMenu(view.dish);
		$('<div><h4>Added <b>' + view.dishName + '</b> to menu!</h4></div>').addClass("alert alert-success text-center").insertBefore('.media').delay(3000).fadeOut();
	});

	view.$back.click(function() {
		stateController.hideAll();
		stateController.showSidebar();
		stateController.showSelectDish();
	});
}
