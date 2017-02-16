//Home Object constructor
var HomeView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	model.addObserver(this);
	this.update = function(obj) {

	}

	
	$jumbotron = $('<div/>').addClass("jumbotron");
	$h1 = $('<h1/>').html("The number one page for planning dinner");
	$p1 = $('<p/>').html("Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...");
	$button = $('<button/>').attr({
		type: "button",
		class: "btn btn-primary btn-lg",
		id: "homeButton"
	}).click(function() {
		window.location.href="selectDish.html"
	}).html("Start planning!");

	$jumbotron.append($h1);
	$jumbotron.append($p1);
	$jumbotron.append($button);
	container.append($jumbotron);
}
