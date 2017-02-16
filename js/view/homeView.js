//Home Object constructor
var HomeView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.hideView = function() {
		this.$jumbotron.hide();
	}

	this.showView = function() {
		this.$jumbotron.show();
	}

	model.addObserver(this);
	this.update = function(obj) {

	}

	
	this.$jumbotron = $('<div/>').addClass("jumbotron");
	$h1 = $('<h1/>').html("The number one page for planning dinner");
	$p1 = $('<p/>').html("Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...");
	$button = $('<button/>').attr({
		type: "button",
		class: "btn btn-primary btn-lg",
		id: "homeButton"
	}).html("Start planning!");

	this.$jumbotron.append($h1);
	this.$jumbotron.append($p1);
	this.$jumbotron.append($button);
	container.append(this.$jumbotron);
}
