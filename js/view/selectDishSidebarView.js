//ExampleView Object constructor
var SelectDishSidebarView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.hideView = function() {
		this.sidebar.hide();
	}

	this.showView = function() {
		container.append(this.sidebar);
	}

	model.addObserver(this);

	this.update = function(obj) {
		allGuests = model.getNumberOfGuests();
		menuPrice = model.getTotalMenuPrice();
		
		$input.attr("value", allGuests);
		
		$tbody.empty();
		menu.forEach(function(dish) {
			var $tr = $("<tr/>");
			var $dishName = $("<td/>").html("<a href='dishdetails.html?id=" + dish.id + "'>" + dish.name + "</a>");
			var $dishPrice = $("<td/>").html(model.getDishPrice(dish.id) + " SEK");
			$tr.append($dishName);
			$tr.append($dishPrice);
			$tbody.append($tr);
		});

		$total.html("<b>" + menuPrice + " SEK</b>")
	}

  	var allGuests = model.getNumberOfGuests();
  	var menu = model.getFullMenu();
  	var menuPrice = model.getTotalMenuPrice();

  	this.$plusButton = $("<button/>").attr({
  		type: "button",
  		id: "plusButton",
  		class: "btn btn-success btn-sm",
  	}).html("<span class='glyphicon glyphicon-plus'></span>");


  	this.$minusButton = $("<button/>").attr({
  		type: "button",
  		id: "minusButton",
  		class: "btn btn-danger btn-sm",
  	}).html("<span class='glyphicon glyphicon-minus'></span>");

	this.sidebar = $("<div/>").addClass("col-md-3 well");	
	var $p = $('<p/>').html("<h3>My dinner</h3> <u>Number of guests:</u> ");
		var $inDiv = $("<div/>").addClass("input-group").attr("style", "width:60px;");
		var $inSpanPlus = $("<span/>").addClass("input-group-btn");
		var $inSpanMinus = $("<span/>").addClass("input-group-btn");
		var $input = $("<input disabled/>").attr({
			type: "text",
			style: "width:40px;height:auto",
			class: "form-control",
			id: "guestNumber",
			value: allGuests
		});

		$inDiv.append($inSpanMinus.append(this.$minusButton));
		$inDiv.append($input);
		$inDiv.append($inSpanPlus.append(this.$plusButton));
		$p.append($inDiv);

	var $table = $('<table/>').addClass("table table-striped");
	var $thead = $('<thead/>');
	var $tr1 = $('<tr/>');
	var $tr2 = $('<tr/>');
	var $th1 = $('<th/>').html('Dish Name');
	var $th2 = $('<th/>').html('Cost');
	var $tbody = $('<tbody/>');
	
	menu.forEach(function(dish) {
		var $tr = $("<tr/>");
		var $dishName = $("<td/>").html("<a href='dishdetails.html?id=" + dish.id + "'>" + dish.name + "</a>");
		var $dishPrice = $("<td/>").html(model.getDishPrice(dish.id) + " SEK");
		$tr.append($dishName);
		$tr.append($dishPrice);
		$tbody.append($tr);
	});


	this.sidebar.append($p);
	$tr1.append($th1);
	$tr1.append($th2);
	$thead.append($tr1);
	$tbody.append($tr2);

	$tfoot = $("<tfoot/>");

	$trTotal = $("<tr/>").addClass("success");
	$tfoot.append($trTotal.append($("<td/>").html("<b>Total</b>")));
	$total = $("<td/>").html("<b>" + menuPrice + " SEK</b>");
	$tfoot.append($trTotal.append($total));

	$table.append($thead);
	$table.append($tbody);
	$table.append($tfoot);
	this.sidebar.append($table);

	this.$checkout = $("<button/>").addClass("btn btn-block").html("Checkout");
	this.$checkout.attr("id", "checkout");
	this.sidebar.append(this.$checkout);

	container.append(this.sidebar);

}
 
