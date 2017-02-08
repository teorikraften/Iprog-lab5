//ExampleView Object constructor
var SelectDishSidebarView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	this.sidebar = container.find("#guests");
  	var allGuests = model.getNumberOfGuests();
  	//var $p = $('<p/>').html("Number of guests: " + allGuests);
  	//var $caption = $('<div/>').addClass('caption');
  	//$caption.append($p);
	$(this.sidebar).append(allGuests);
}
 
