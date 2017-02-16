//Dish info Object constructor
var DishInformationView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	model.addObserver(this);

	this.hideView = function() {
		this.$content.hide();
	}

	this.showView = function(obj) {
		this.getDish(obj);
		this.update();
		this.$content.show();
	}

	var roundHalf = function(num) {
		return Math.round(num*2)/2;
	}

	this.getDish = function(obj) {
		this.dishID = obj;
		this.dish = model.getDish(this.dishID);
	}

	this.update = function(obj) {
		guests = model.getNumberOfGuests();

		listItems = ""
		this.dish.ingredients.forEach(function(ingredient) {
			listItems += "<li class='list-group-item'>"
							+ingredient.name+
						 "<span class='badge'>"
							+roundHalf(guests*ingredient.quantity)+" "+ingredient.unit+
						 "</span></li>";
		});

		this.$content.html("<div class='row well'>" + 
							  			"<div class='col-md-7>" +
							  				"<button type='button' class='btn btn-primary btn-lg' id='back'>Back</button>" +
							  				"<div class='media'>" +
							  					"<div class='media-left'>" +
							  						"<img src='images/" + this.dish.image + "' class='media-object img-rounded'>" +
							  					"</div>" +
							  					"<div class='media-body'>" +
							  						"<h3 class='media-heading'>" + this.dish.name + " for " + guests + " guests</h3>" +
							  						"<p>" + this.dish.description + "</p>" +
							  					"</div>" +
							  				"</div>" +
							  			"</div>" +
							  			"<div class='col-md-5'>" +
							  				"<div class='panel panel-default'>" +
							  					"<div class='panel-heading'>Ingredients</div>" +
							  					"<div class='panel-body>" +
							  						"<ul class='list-group'>" +
							  							listItems + 
							  						"</ul>" +
							  					"</div>" +
							  				"</div>" +
							  				"<button type='button' class='btn btn-primary btn-lg' id='addDish'>Add to menu</button>" +
							  			"</div>" +
							  		"</div>");
	}

	// get the dish id from the parameter passd  by url
	this.dishID = 100;
	this.dish = model.getDish(this.dishID);
	var guests = model.getNumberOfGuests();

	var listItems = "";
	this.dish.ingredients.forEach(function(ingredient) {
		listItems += "<li class='list-group-item'>"
						+ingredient.name+
					 "<span class='badge'>"
						+roundHalf(guests*ingredient.quantity)+" "+ingredient.unit+
					 "</span></li>";
	});

	this.$content = $("<div/>").addClass("col-md-9")
						  .html("<div class='row well'>" + 
						  			"<div class='col-md-7>" +
						  				"<button type='button' class='btn btn-primary btn-lg' id='back'>Back</button>" +
						  				"<div class='media'>" +
						  					"<div class='media-left'>" +
						  						"<img src='images/" + this.dish.image + "' class='media-object img-rounded'>" +
						  					"</div>" +
						  					"<div class='media-body'>" +
						  						"<h3 class='media-heading'>" + this.dish.name + " for " + guests + " guests</h3>" +
						  						"<p>" + this.dish.description + "</p>" +
						  					"</div>" +
						  				"</div>" +
						  			"</div>" +
						  			"<div class='col-md-5'>" +
						  				"<div class='panel panel-default'>" +
						  					"<div class='panel-heading'>Ingredients</div>" +
						  					"<div class='panel-body>" +
						  						"<ul class='list-group'>" +
						  							listItems + 
						  						"</ul>" +
						  					"</div>" +
						  				"</div>" +
						  				"<button type='button' class='btn btn-primary btn-lg' id='addDish'>Add to menu</button>" +
						  			"</div>" +
						  		"</div>");

	container.append(this.$content);
	
}
 
