// selectDistViewController
var SelectDishViewController = function(view, model) {
	
	view.$select.change(function() {
		view.update(view.$select.val());
	});

}