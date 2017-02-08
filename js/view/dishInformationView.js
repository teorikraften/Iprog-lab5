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

	// get the dish id from the parameter passd  by url
	var dishID = getUrlParameter('id');
	var dish = model.getDish(dishID);

	container.find("#dishName").html(dish.name);
	container.find("#image").append("<img src='images/"+dish.image+"' class='media-object img-rounded'>");
	container.find("#desc").html(dish.description);
	container.find("#addDish").onclick = function(){model.addDishToMenu(dishID)};

	dish.ingredients.forEach(function(ingredient) {
		container.find("#ingredients").append(
			"<li class='list-group-item'>"
				+ingredient.name+
				"<span class='badge'>"
				+ingredient.quantity+" "+ingredient.unit+
			"</span></li>");
	});





	
}
 
