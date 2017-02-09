//Dish info Object constructor
var InstructionsView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var body = container.find("#instructions");

	var guests = model.getNumberOfGuests();
	var menu = model.getFullMenu();


	$panel = $("<div/>").addClass("panel panel-default");
	$panelheading = $("<div/>").addClass("panel-heading");
	$panelheadingButton = $("<button/>").attr({
		type: "button",
		class: "btn btn-primary btn-md pull-right",
		style: "margin-top: 10px"
	}).html("Go back and edit dinner");
	$panelheading.append($panelheadingButton);
	$panelheading.append("<h3>My dinner: " + guests + "</h3>");

	$panelbody = $("<div/>").addClass("panel-body");

	menu.forEach(function(dish) {
		$media = $("<div/>").addClass("media");
		
		$medialeft = $("<div/>").addClass("media-left pull-left");
		$image = $("<img>").attr("src","images/" + dish.image);
		$image.addClass("media-object");
		$medialeft.append($image);

		$mediabody = $("<div/>").addClass("media-body");
		$h4 = $("<h3>").addClass("media-heading");
		$h4.append(dish.name);
		$mediabody.append($h4);
		$p = $("<p/>").append(dish.description);
		$mediabody.append($p);

		$media.append($medialeft);
		$media.append($mediabody);

		$panelbody.append($media);
	});

	$panel.append($panelheading);
	$panel.append($panelbody);

	body.append($panel);
	
}
 
