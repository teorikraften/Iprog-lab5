//ExampleView Object constructor
var SelectDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
  	
  	this.dishTypeSelect = container.find("#inputSelect");
  	var $formGroup = $('<div/>').addClass("form-group");
  	var $select = $('<select/>').addClass("form-control").attr({
  		id: "sel1",
  		onchange: "alert('Not implemented...yet!')"});
  	var $option1 = $('<option/>').attr('value', '1').html("Main");
  	var $option2 = $('<option/>').attr('id', "starterDish").html("Starter");
  	var $option3 = $('<option/>').attr('id', "dessertDish").html("Dessert");


  	$select.append($option1);
  	$select.append($option2);
  	$select.append($option3);
  	$formGroup.append($select);
  	this.dishTypeSelect.append($formGroup);




  	this.dishes = container.find("#dishes");

  	var $main = $('<div/>').addClass('row');
  	var $starter = $('<div/>').addClass('row');
  	var $dessert = $('<div/>').addClass('row');
  	this.dishes.append($main);
  	this.dishes.append($starter);
  	this.dishes.append($dessert);



  	// main dishes
  	var mainDishes = model.getAllDishes('main dish');
	for(var i = 0; i < mainDishes.length; i++) {
		var $column = $('<div/>').addClass("col-md-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + mainDishes[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:100%; height:100%');
		var $caption = $('<div/>').addClass('caption');

		var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + mainDishes[i].id + "'>" + mainDishes[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append($h3);
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		$main.append($column);
	}

	var starterDishes = model.getAllDishes('starter');
	for(var i = 0; i < starterDishes.length; i++) {
		var $column = $('<div/>').addClass("col-md-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + starterDishes[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:100%; height:100%');
		var $caption = $('<div/>').addClass('caption');

		var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + starterDishes[i].id + "'>" + starterDishes[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append($h3);
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		$starter.append($column);
	}

	var desserts = model.getAllDishes('dessert');
	for(var i = 0; i < desserts.length; i++) {
		var $column = $('<div/>').addClass("col-md-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + desserts[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:100%; height:100%');
		var $caption = $('<div/>').addClass('caption');

		var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + desserts[i].id + "'>" + desserts[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append($h3);
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		$dessert.append($column);
	}
}
 
