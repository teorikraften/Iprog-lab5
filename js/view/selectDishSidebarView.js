//ExampleView Object constructor
var SelectDishSidebarView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	var allGuests = model.getNumberOfGuests();
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
	var $td1 = $('<td/>').html('Pending');
	var $td2 = $('<td/>').html('0');
	var $total = $('<p/>').attr('align', 'right').html('SEK 0.00');

	this.sidebar.append($p);
	this.sidebar.append($div1);
	$tr1.append($th1);
	$tr1.append($th2);
	$thead.append($tr1);
	$tr2.append($td1);
	$tr2.append($td2);
	$tbody.append($tr2);
	$table.append($thead);
	$table.append($tbody);
	this.sidebar.append($table);
	this.sidebar.append($total);
}
 
