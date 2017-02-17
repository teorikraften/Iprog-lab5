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

		this.$row.detach();
		this.$row = $("<div/>").addClass("row well");
		this.$row.html("<div class='col-md-7>" +
											  				"<div class='media'>" +
											  					"<div class='media-left'>" +
											  						"<img src='images/" + this.dish.image + "' class='media-object img-rounded'>" +
											  					"</div>" +
											  					"<div class='media-body'>" +
											  						"<h3 class='media-heading'>" + this.dish.name + " for " + guests + " guests</h3>" +
											  						"<p>" + this.dish.description + "</p>" +
											  					"</div>" +
											  				"</div>" +
											  			  "</div>");
		this.$col5 = $("<div/>").addClass("col-md-5").html("<div class='panel panel-default'>" +
											  					"<div class='panel-heading'>Ingredients</div>" +
											  					"<div class='panel-body>" +
											  						"<ul class='list-group'>" +
											  							listItems + 
											  						"</ul>" +
											  					"</div>" +
											  				"</div>");


		//this.$col5.append(this.$button);
		this.$col5.append(this.$button);
		this.$col5.append(this.$back);

		this.$row.append(this.$col5);
		this.$content.append(this.$row);
	}

	// get the dish id from the parameter passd  by url
	this.dishID = 100;
	this.dish = model.getDish(this.dishID);
	this.$button = $("<button/>").attr({type: "button",
										class: "btn btn-primary btn-lg",
										id: "addDish"})
								 .html("Add to menu");

	this.$back = $("<button/>").attr({type: "button",
										class: "btn btn-primary btn-lg pull-right",
										id: "back"})
								 .html("Back");

	var guests = model.getNumberOfGuests();

	var listItems = "";
	this.dish.ingredients.forEach(function(ingredient) {
		listItems += "<li class='list-group-item'>"
						+ingredient.name+
					 "<span class='badge'>"
						+roundHalf(guests*ingredient.quantity)+" "+ingredient.unit+
					 "</span></li>";
	});

	this.$content = $("<div/>").addClass("col-md-9");

	this.$row = $("<div/>").addClass("row well");
	this.$row.html("<div class='col-md-7>" +
										  				"<div class='media'>" +
										  					"<div class='media-left'>" +
										  						"<img src='images/" + this.dish.image + "' class='media-object img-rounded'>" +
										  					"</div>" +
										  					"<div class='media-body'>" +
										  						"<h3 class='media-heading'>" + this.dish.name + " for " + guests + " guests</h3>" +
										  						"<p>" + this.dish.description + "</p>" +
										  					"</div>" +
										  				"</div>" +
										  			  "</div>");
	this.$col5 = $("<div/>").addClass("col-md-5").html("<div class='panel panel-default'>" +
										  					"<div class='panel-heading'>Ingredients</div>" +
										  					"<div class='panel-body>" +
										  						"<ul class='list-group'>" +
										  							listItems + 
										  						"</ul>" +
										  					"</div>" +
										  				"</div>");


	this.$col5.append(this.$button);
	this.$col5.append(this.$back);
	
	this.$row.append(this.$col5);

	this.$content.append(this.$row);

	container.append(this.$content);
	
}
 
