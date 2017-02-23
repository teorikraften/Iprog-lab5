//Dish info Object constructor
var InstructionsView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

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
		
		$panelbody.empty();
		menu.forEach(function(dish) {
			this.$row = $("<div/>").addClass("row");
				this.$col4 = $("<div/>").addClass("col-md-4");
					this.$img = $("<img/>").attr("src", dish.image);
				this.$col8 = $("<div/>").addClass("col-md-8");
					this.$accordion = $("<div/>").addClass("panel-group").attr("id", "accordion");


			model.getDishInstructions(dish.id, function(instructions) {
				instructions.steps.forEach(function(instruction) {
					// an instruction
					this.$accordionItem = $("<div/").addClass("panel panel-default");
						this.$accordionItemHeading = $("<div/>").addClass("panel-heading");
							this.$itemTitle = $("<h4/>").addClass("panel-title");
								this.$itemTitleLink = $("<a/>").attr({
									'data-toggle': 'collapse',
									'data-parent': 'accordion',
										   'href': 'collapse' + instruction.number  
								}).html("Step " + instruction.number);
						this.$accordionItemBody = $("<div/>").addClass("panel-collapse collapse").attr("id", "collapse"+instruction.number);
							this.$itemContent = $("<p/>").html(instruction.step);

					this.$accordion.append(this.$accordionItem);
						this.$accordionItem.append(this.$accordionItemHeading);
							this.$accordionItemHeading.append(this.$itemTitle);
								this.$itemTitle.append(this.$itemTitleLink);
						this.$accordionItem.append(this.$accordionItemBody);
							this.$accordionItemBody.append(this.$itemContent);
				});			
			});

			this.$panelbody.append(this.$row);
				this.$row.append(this.$col4);
					this.$col4.append(this.$img);
				this.$row.append(this.$col8);
					this.$col8.append(this.$accordion);

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

	$panelbody = $("<div/>").addClass("panel-body");

	this.$panel.append(this.$panelheading);
	this.$panel.append(this.$panelbody);

	this.$body.append(this.$panel);

	container.append(this.$body);
	
}
 
