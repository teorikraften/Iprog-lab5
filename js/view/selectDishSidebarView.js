//ExampleView Object constructor
var SelectDishSidebarView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	var allGuests = model.getNumberOfGuests();
  	var menu = model.getFullMenu();
  	var menuPrice = model.getTotalMenuPrice();

	this.sidebar = container.find("#sidebar").addClass("well");	
	var $p = $('<p/>').html("<h3>My dinner</h3>");
	var $div1 = $('<div/>').html("Number of guests: " + allGuests);
	var $table = $('<table/>').addClass("table table-striped");
	var $thead = $('<thead/>');
	var $tr1 = $('<tr/>');
	var $tr2 = $('<tr/>');
	var $th1 = $('<th/>').html('Dish Name');
	var $th2 = $('<th/>').html('Cost');
	var $tbody = $('<tbody/>');
	
	menu.forEach(function(dish) {
		var $td = $("<tr/>");
		$td.append($("<td/>").html(dish.name));
		$td.append($("<td/>").html(model.getDishPrice(dish.id) + " SEK"));
		$tbody.append($td);
	});

	//var $total = $('<p/>').attr('align', 'right').html(menuPrice + " SEK");

	this.sidebar.append($p);
	this.sidebar.append($div1);
	$tr1.append($th1);
	$tr1.append($th2);
	$thead.append($tr1);
	$tbody.append($tr2);

	$trTotal = $("<tr/>").addClass("success");
	$tbody.append($trTotal.append($("<td/>").html("<b>Total</b>")));
	$tbody.append($trTotal.append($("<td/>").html("<b>" + menuPrice + " SEK</b>")));

	$table.append($thead);
	$table.append($tbody);
	this.sidebar.append($table);
	this.sidebar.append($total);
}
 
