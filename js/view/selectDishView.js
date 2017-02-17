//ExampleView Object constructor
var SelectDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction

  	this.hideView = function() {
  		$content.hide();
  	}

  	this.showView = function() {
  		$content.show();
  	}

	model.addObserver(this);
	this.update = function(obj, filter) {
		if(obj == 'main dish' || obj == 'starter' || obj == 'dessert') {
			var mainDishes = model.getAllDishes(obj, filter);
			$main.detach();
			$main = $('<div/>').addClass('row');
			for(var i = 0; i < mainDishes.length; i++) {
				var $column = $('<div/>').addClass("col-sm-3");
				var $thumbnail = $('<div/>').addClass('thumbnail');

				var $img = $('<img/>').attr('src', 'images/' + mainDishes[i].image);
				$img.attr('class','img-rounded img-thumbnail');
				$img.attr('style','width:150px; height:150px');
				var $caption = $('<div/>').addClass('caption');

				this.$h3 = $('<h3/>').html("<a class='dishclick' href='#' id='" + mainDishes[i].id + "'>" + mainDishes[i].name + "</a>");				//var $p = $('<p/>').html(allDishes[i].description);


				$caption.append(this.$h3);
				//$caption.append($p);

				$thumbnail.append($img);
				$thumbnail.append($caption);

				$column.append($thumbnail);
				$main.append($column);
			}
		}
		this.dishes.append($main);
	}

	$content = $("<div/>").addClass("col-md-9");

	var $panel = $("<div/>").addClass("panel panel-default");
	var $panel_heading = $("<div/>").addClass("panel-heading").html("<h3>SELECT DISH</h3>");
	var $panel_heading_row = $("<div/>").addClass("row");
	var $panel_heading_row_col = $("<div/>").attr({class: "col-md-6", id: "search"});
	var $panel_heading_row_col_input_grp = $("<div/>").addClass("input-group").html(
		  							"<input id='searchDish' type='text' class='form-control' placeholder='Enter key words'>" +
		  							"<span class='input-group-addon'>search</span>");

	var $dishTypeSelect = $("<div/>").attr({class: "col-md-6", id: "inputSelect"});
	var $panel_body = $("<div/>").addClass("panel-body").attr("id", "dishes");

  	
  	var $formGroup = $('<div/>').addClass("form-group");
  	this.$select = $('<select/>').addClass("form-control").attr({
  		id: "sel1"});
  	var $option1 = $('<option/>').attr('value', 'main dish').html("Main courses");
  	var $option2 = $('<option/>').attr('value', "starter").html("Starters");
  	var $option3 = $('<option/>').attr('value', "dessert").html("Desserts");


  	this.$select.append($option1);
  	this.$select.append($option2);
  	this.$select.append($option3);
  	$formGroup.append(this.$select);
  	$dishTypeSelect.append($formGroup);
  	$panel_heading_row.append($dishTypeSelect);

  	$panel_heading_row_col.append($panel_heading_row_col_input_grp);
  	$panel_heading_row.append($panel_heading_row_col);
  	$panel_heading.append($panel_heading_row);
  	$panel.append($panel_heading);
  	$panel.append($panel_body);




  	this.dishes = $panel_body;

  	var $main = $('<div/>').addClass('row');
  	this.dishes.append($main);
  	$panel_body.append(this.dishes);



  	// main dishes
  	var mainDishes = model.getAllDishes('main dish');
	for(var i = 0; i < mainDishes.length; i++) {
		var $column = $('<div/>').addClass("col-sm-3");
		var $thumbnail = $('<div/>').addClass('thumbnail');

		var $img = $('<img/>').attr('src', 'images/' + mainDishes[i].image);
		$img.attr('class','img-rounded img-thumbnail');
		$img.attr('style','width:150px; height:150px');
		var $caption = $('<div/>').addClass('caption');

		this.$h3 = $('<h3/>').html("<a class='dishclick' href='#' id='" + mainDishes[i].id + "'>" + mainDishes[i].name + "</a>");
		//var $p = $('<p/>').html(allDishes[i].description);


		$caption.append(this.$h3);
		//$caption.append($p);

		$thumbnail.append($img);
		$thumbnail.append($caption);

		$column.append($thumbnail);
		$main.append($column);
	}


	$content.append($panel);
	container.append($content);

}
 
