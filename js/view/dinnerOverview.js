//ExampleView Object constructor
var DinnerOverview = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	model.addObserver(this);

	this.update = function(obj) {
		allGuests = model.getNumberOfGuests();
		totalMenuPrice = model.getTotalMenuPrice();
		fullMenu = model.getFullMenu();

		//Update number of guests
		$panelHeadingContent = 'My Dinner: ' + allGuests + ' people';
		$panelHeadingH3.html($panelHeadingContent);

		//Update total cost of menu
		//totalMenuPriceUpdated.html("Total: " + totalMenuPrice + " SEK");

		$panelBody.empty();
		$dishes = $('<div/>').addClass('row');

		fullMenu.forEach(function(dish) {
			var $column = $('<div/>').addClass("col-md-3");
			var $thumbnail = $('<div/>').addClass('thumbnail');

			var $img = $('<img/>').attr('src', 'images/' + dish.image);
			$img.attr('class','img-rounded img-thumbnail');
			$img.attr('style','width:100%; height:100%');
			var $caption = $('<div/>').addClass('caption');

			var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + dish.id + "'>" + dish.name + "</a>");
			//var $p = $('<p/>').html(allDishes[i].description);


			$caption.append($h3);
			$caption.append($('<small/>').html(model.getDishPrice(dish.id) + ' SEK'));
			//$caption.append($p);

			$thumbnail.append($img);
			$thumbnail.append($caption);

			$column.append($thumbnail);
			$dishes.append($column);
		});

		$dishes.append($('<div/>').addClass("col-md-3").attr('id', 'totalMenuPrice').html("Total: " + totalMenuPrice + " SEK"));
		$panelBody.append($dishes);
	}



	var allGuests = model.getNumberOfGuests();
	var totalMenuPrice = model.getTotalMenuPrice();

	this.menu = $('#menu');
	var $panelDefault = $('<div/>').addClass("panel panel-default");
	var $panelHeading = $('<div/>').addClass("panel-heading");
	var $panelBody = $('<div/>').addClass("panel-body");
	var $panelHeadingH3 = $('<h3/>');
	var $panelHeadingContent = 'My Dinner: ' + allGuests + ' people';
	this.$panelHeadingButton = $('<button/>').attr({
		type: "button",
		class: "btn btn-primary btn-md pull-right",
		style: "margin-top: 10px"
	}).html("Go back and edit dinner");


	this.$dishes = $('<div/>').addClass('row');

	var fullMenu = model.getFullMenu();
	for(var i = 0; i < fullMenu.length; i++) {
		var $column = $('<div/>').addClass("col-md-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + fullMenu[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:100%; height:100%');
		var $caption = $('<div/>').addClass('caption');

		var $h3 = $('<h3/>').html("<a href='dishdetails.html?id=" + fullMenu[i].id + "'>" + fullMenu[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append($h3);
		$caption.append($('<small/>').html(model.getDishPrice(fullMenu[i].id) + ' SEK'));
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		this.$dishes.append($column);

	}

	$panelHeadingH3.append($panelHeadingContent)
	$panelHeading.append(this.$panelHeadingButton);
	$panelHeading.append($panelHeadingH3);
	$panelDefault.append($panelHeading);
	this.$dishes.append($('<div/>').addClass("col-md-3").attr('id', 'totalMenuPrice').html("Total: " + totalMenuPrice + " SEK"));
	$panelBody.append(this.$dishes);
	$panelDefault.append($panelBody);
	this.menu.append($panelDefault);
	this.menu.append($('<button/>').attr({
		type: "button",
		class: "btn btn-primary btn-md pull-right",
		style: "margin-top: 10px"
	}).html("Print Full Recipe"));

	//var totalMenuPriceUpdated = $('#totalMenuPrice');
}