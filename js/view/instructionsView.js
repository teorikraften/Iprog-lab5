//Dish info Object constructor
var InstructionsView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var parent = this;
	this.hideView = function() {
		this.$body.hide();
	}

	this.showView = function() {
		this.$body.show();
	}
	

	model.addObserver(this);
	this.update = function(obj) {
		guests = model.getNumberOfGuests();
		container.find('#numberOfGuests').html("My Dinner: " + guests + " guests");
		
		parent.$panelbody.empty();
		menu.forEach(function(dish) {
			var $row = $("<div/>").addClass("row");
				var $col4 = $("<div/>").addClass("col-md-4");
					 var $img = $("<img/>").addClass("img-responsive").attr("src", dish.image);
				var $col8 = $("<div/>").addClass("col-md-8");
					var $accordion = $("<div/>").addClass("panel-group").attr("id", "accordion");


			model.getDishInstructions(dish.id, function(instructions) {
				instructions[0].steps.forEach(function(instruction) {
					// an instruction
					var $accordionItem = $("<div/>").addClass("panel panel-default");
						var $accordionItemHeading = $("<div/>").addClass("panel-heading");
							var $itemTitle = $("<h4/>").addClass("panel-title");
								var $itemTitleLink = $("<a/>").attr({
									'data-toggle': 'collapse',
									'data-parent': 'accordion',
										   'href': '#' + dish.id + 'collapse' + instruction.number  
								}).html("Step " + instruction.number);
						var $accordionItemBody = $("<div/>").addClass("panel-collapse").attr("id", dish.id + "collapse" + instruction.number);
							var $itemContent = $("<p/>").html(instruction.step);

					$accordion.append($accordionItem);
						$accordionItem.append($accordionItemHeading);
							$accordionItemHeading.append($itemTitle);
								$itemTitle.append($itemTitleLink);
						$accordionItem.append($accordionItemBody);
							$accordionItemBody.append($itemContent);
				});			
			});

			parent.$panelbody.append($row);
				$row.append($col4);
					$col4.append($("<h3/>").html(dish.title));
					$col4.append($img);
				$row.append($col8);
					$col8.append($accordion);
			parent.$panelbody.append($("<hr/>"));

		});
	}

	this.$body = $("<div/>").addClass("col-md-12");

	var guests = model.getNumberOfGuests();
	var menu = model.getFullMenu();


	this.$panel = $("<div/>").addClass("panel panel-default");
	this.$panelheading = $("<div/>").addClass("panel-heading");
	this.$panelheadingButton = $("<button/>").attr({
		type: "button",
		class: "btn btn-primary btn-md pull-right",
		style: "margin-top: 10px"
	}).html("Go back and edit dinner");
	this.$panelheading.append(this.$panelheadingButton);
	this.$panelheading.append("<h3 id = 'numberOfGuests'>My Dinner: " + guests + " guests</h3>");

	this.$panelbody = $("<div/>").addClass("panel-body");

	this.$panel.append(this.$panelheading);
	this.$panel.append(this.$panelbody);

	this.$body.append(this.$panel);

	container.append(this.$body);
	
}
 
