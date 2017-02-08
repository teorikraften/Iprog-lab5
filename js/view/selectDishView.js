//ExampleView Object constructor
var SelectDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	this.dishes = container.find("#dishes");
  	var allDishes = model.getAllDishes('main dish');
 	this.dishes.append("<div class='row'>");
	for(var i = 0; i < allDishes.length; i++) {
		var $column = $('<div/>').addClass("col-md-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + allDishes[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:100%; height:100%');
		var $caption = $('<div/>').addClass('caption');

		var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + allDishes[i].id + "'>" + allDishes[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append($h3);
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		$(this.dishes).append($column);
	}
	this.dishes.append("</div>");
}
 
