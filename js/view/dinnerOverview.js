//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var allGuests = model.getNumberOfGuests();

	this.menu = container.find('#menu');
	var $panelDefault = $('<div/>').addClass("panel panel-default");
	var $panelHeading = $('<div/>').addClass("panel-heading");
	var $panelBody = $('<div/>').addClass("panel-body");
	var $panelHeadingH3 = $('<h3/>');
	var $panelHeadingContent = 'My Dinner: ' + allGuests + ' people';
	var $panelHeadingButton = $('<button/>').attr({
		type: "button",
		class: "btn btn-primary btn-md pull-right",
		style: "margin-top: 10px"
	}).html("Go back and edit dinner");


	$panelHeadingH3.append($panelHeadingContent)
	$panelHeading.append($panelHeadingButton);
	$panelHeading.append($panelHeadingH3);
	$panelDefault.append($panelHeading);
	$panelDefault.append($panelBody);
	this.menu.append($panelDefault);
}