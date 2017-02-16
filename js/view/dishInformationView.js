//Dish info Object constructor
var DishInformationView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	this.hideView = function() {
		$content.hide();
	}

	this.showView = function() {
		$content.show();
	}

	this.update = function(obj) {
		
	}

	// get the dish id from the parameter passd  by url
	var dishID = getUrlParameter('id') || 100;
	var dish = model.getDish(dishID);

	var listItems = "";
	dish.ingredients.forEach(function(ingredient) {
		listItems += "<li class='list-group-item'>"
						+ingredient.name+
					 "<span class='badge'>"
						+ingredient.quantity+" "+ingredient.unit+
					 "</span></li>";
	});

	$content = $("<div/>").addClass("col-md-9")
						  .html("<div class='row well'>" + 
						  			"<div class='col-md-7>" +
						  				"<button type='button' class='btn btn-primary btn-lg' id='back'>Back</button>" +
						  				"<div class='media'>" +
						  					"<div class='media-left'>" +
						  						"<img src='images/" + dish.image + "' class='media-object img-rounded'>" +
						  					"</div>" +
						  					"<div class='media-body'>" +
						  						"<h3 class='media-heading'>" + dish.name + "</h3>" +
						  						"<p>" + dish.description + "</p>" +
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

	container.append($content);
	
}
 
