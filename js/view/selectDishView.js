//ExampleView Object constructor
var SelectDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction
  	var parent = this;

  	this.hideView = function() {
  		$content.hide();
  	}

  	this.showView = function() {
  		$content.show();
  	}

	model.addObserver(this);
	this.update = function(obj, filter) {
		if(obj == 'main course' || obj == 'side dish' || obj == 'dessert') {
			parent.disherino.children().hide();
			parent.$loading.show();
			model.getAllDishes(obj, filter, function(dishes) {
				parent.$main.empty();
				for(var i = 0; i < dishes.totalResults; i++) {
					var $column = $('<div/>').addClass("col-xs-6");
					var $thumbnail = $('<div/>').addClass('thumbnail');
					var $img = $('<img/>').attr('src', dishes.baseUri + dishes.results[i].image);
					$img.attr('class','img-rounded img-fluid');
					//$img.attr('style','width:150px; height:130px');
					var $caption = $('<div/>').addClass('caption');

					this.$h3 = $('<h3/>').html("<a class='dishclick' href='#' id='" + dishes.results[i].id + "'>" + dishes.results[i].title + "</a>");				//var $p = $('<p/>').html(allDishes[i].description);


					$caption.append(this.$h3);
					//$caption.append($p);

					$thumbnail.append($img);
					$thumbnail.append($caption);

					$column.append($thumbnail);
					parent.$main.append($column);
					if( (i + 1) % 2 == 0) {
						parent.$main.append($("<div/>").addClass("clearfix"));
					}
				}
				parent.disherino.append(parent.$main);
				parent.disherino.children().show();
				parent.$loading.hide();
			});
		}

		//this.dishes.append($main);
	}

	$content = $("<div/>").addClass("col-md-9");

	var $panel = $("<div/>").addClass("panel panel-default");
	var $panel_heading = $("<div/>").addClass("panel-heading").html("<h3>SELECT DISH</h3>");
	var $panel_heading_row = $("<div/>").addClass("row");
	var $panel_heading_row_col = $("<div/>").attr({class: "col-md-6", id: "search"});
	var $panel_heading_row_col_input_grp = $("<div/>").addClass("input-group");
	this.$dishSearch = $("<input id='searchDish' type='text' class='form-control' placeholder='Enter key words'>");

	var $dishTypeSelect = $("<div/>").attr({class: "col-md-6", id: "inputSelect"});
	var $panel_body = $("<div/>").addClass("panel-body").attr("id", "dishes");

  	
  	var $formGroup = $('<div/>').addClass("form-group");
  	this.$select = $('<select/>').addClass("form-control").attr({
  		id: "sel1"});
  	var $option1 = $('<option/>').attr('value', 'main course').html("Main courses");
  	var $option2 = $('<option/>').attr('value', "side dish").html("Side dishes");
  	var $option3 = $('<option/>').attr('value', "dessert").html("Desserts");


  	this.$select.append($option1);
  	this.$select.append($option2);
  	this.$select.append($option3);
  	$formGroup.append(this.$select);
  	$dishTypeSelect.append($formGroup);
  	$panel_heading_row.append($dishTypeSelect);

  	$panel_heading_row_col.append($panel_heading_row_col_input_grp);
  	$panel_heading_row_col_input_grp.append(this.$dishSearch);
  	$panel_heading_row.append($panel_heading_row_col);
  	$panel_heading.append($panel_heading_row);
  	$panel.append($panel_heading);
  	$panel.append($panel_body);




  	this.disherino = $panel_body;
  	this.$loading = $("<div/>").addClass("text-center").append($("<img/>").attr({src: "https://i.stack.imgur.com/FhHRx.gif",
  								     alt: "Loading..."}));
  	this.$loading.hide();
  	this.disherino.append(this.$loading);

  	this.$main = $('<div/>').addClass('row');
  	this.disherino.append(this.$main);
  	$panel_body.append(this.disherino);



  	// main dishes
  	model.getAllDishes('main course', '', function(dishes) {
  		for(var i = 0; i < dishes.totalResults; i++) {
			var $column = $('<div/>').addClass("col-xs-6");
			var $thumbnail = $('<div/>').addClass('thumbnail');

			var $img = $('<img/>').attr('src', dishes.baseUri + dishes.results[i].image);
			$img.attr('class','img-responsive img-rounded');
			//$img.attr('style','padding-top:5px');
			var $caption = $('<div/>').addClass('caption');

			this.$h3 = $('<h3/>').html("<a class='dishclick' href='#' id='" + dishes.results[i].id + "'>" + dishes.results[i].title + "</a>");
			//var $p = $('<p/>').html(allDishes[i].description);


			$caption.append(this.$h3);
			//$caption.append($p);

			$thumbnail.append($img);
			$thumbnail.append($caption);

			$column.append($thumbnail);
			parent.$main.append($column);
			if( (i + 1) % 2 == 0) {
				parent.$main.append($("<div/>").addClass("clearfix"));
			}
		}
  	});

	$content.append($panel);
	container.append($content);



}
 
