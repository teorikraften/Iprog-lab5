// selectDistViewController
var SelectDishViewController = function(view, model) {
	
	view.$select.change(function() {
		view.update(view.$select.val());
	});

	$(".dishclick").on("click", function() {
		view.emptyView();
	});

}