//Dish info Object constructor
var DishInformationView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	model.addObserver(this);
	var parent = this;

	this.hideView = function() {
		this.$content.hide();
	}

	this.showView = function(obj) {
		this.update(obj);
		this.$content.show();
	}

	var roundHalf = function(num) {
		return Math.round(num*2)/2;
	}

	this.update = function(dishID) {
		if(this.dishID != dishID && dishID != undefined) {
			this.dishID = dishID;
			model.getDish(parent.dishID, function(dish) {
				parent.dish = dish;
				
				var listItems = ""
				parent.ingredients = dish.extendedIngredients;
				parent.ingredients.forEach(function(ingredient) {
					listItems += "<li class='list-group-item'>"
									+ingredient.name+
								 "<span class='badge'>"
									+roundHalf(parent.guests*ingredient.amount)+" "+ingredient.unitShort+
								 "</span></li>";
				});

				parent.$img.attr("src", dish.image);
				parent.dishName = dish.title;
				parent.$dishTitle.html(parent.dishName);
				parent.$servings.html("Servings: " + parent.guests);
				
				model.getDishSummary(dish.id, function(summary) {
					parent.$dishInstructions.html(summary.summary);
				});

				parent.$listIngredients.html(listItems);

			});
		}

		if(parent.guests != model.getNumberOfGuests()) {
			parent.guests = model.getNumberOfGuests();
			parent.$servings.html("Servings: " + parent.guests);
			var listItems = "";
			parent.ingredients.forEach(function(ingredient) {
				listItems += "<li class='list-group-item'>"
								+ingredient.name+
							 "<span class='badge'>"
								+roundHalf(parent.guests*ingredient.amount)+" "+ingredient.unitShort+
							 "</span></li>";
			});
			parent.$listIngredients.html(listItems);
		}
	}

	parent.guests = model.getNumberOfGuests();
	this.dish = null;
	this.dishID = -1;
	this.dishName = "";
	this.$content = $("<div/>").addClass("col-md-9");
		this.$panelBig = $("<div/>").addClass("panel panel-default");
			this.$panelBigHeading = $("<div/>").addClass("panel-heading");
				this.$dishTitle = $("<h3/>").addClass("media-heading").html("Placeholder for X guests");
					this.$servings = $("<span/>").addClass("badge");
			this.$panelBigBody = $("<div/>").addClass("panel-body");
				this.$row = $("<div/>").addClass("row");
					this.$col7 = $("<div/>").addClass("col-md-7");
						this.$media = $("<div/>").addClass("media");
							this.$mediaLeft = $("<div/>").addClass("media-left");
								this.$img = $("<img/>").addClass("media-object img-rounded").attr({style: "width:150px;height:150px"});
							this.$mediaBody = $("<div/>").addClass("media-body");
								this.$dishInstructions = $("<p/>").html("Instructions");
					this.$col5 = $("<div/>").addClass("col-md-5");
						this.$panel = $("<div/>").addClass("panel panel-default");
							this.$panelHeading = $("<div/>").addClass("panel-heading").html("Ingredients");
							this.$panelBody = $("<div/>").addClass("panel-body");
								this.$listIngredients = $("<ul/>").addClass("list-group");


	this.$button = $("<button/>").attr({type: "button",
									    class: "btn btn-primary btn-lg",
										id: "addDish"})
							 	 .html("Add to menu");


	this.$back = $("<button/>").attr({type: "button",
 									  class: "btn btn-primary btn-lg pull-right",
									  id: "back"})
							   .html("Back");

	this.$loading = $("<div/>").addClass("text-center").append($("<img/>").attr({src: "https://i.stack.imgur.com/FhHRx.gif",
  								     alt: "Loading..."}));
  	this.$loading.hide();
  	this.$panelBigBody.append(this.$loading);

	container.append(this.$content);
	this.$content.append(this.$panelBig);
		this.$panelBig.append(this.$panelBigHeading);
			this.$panelBigHeading.append(this.$dishTitle);
			this.$panelBigHeading.append(this.$servings);
		this.$panelBig.append(this.$panelBigBody);
			this.$panelBigBody.append(this.$row);
				this.$row.append(this.$col7);
					this.$col7.append(this.$media);
						this.$media.append(this.$mediaLeft);
							this.$mediaLeft.append(this.$img);
						this.$media.append(this.$mediaBody);
							this.$mediaBody.append(this.$dishInstructions);
				this.$row.append(this.$col5);
					this.$col5.append(this.$panel);
					this.$panel.append(this.$panelHeading);
					this.$panel.append(this.$panelBody);
						this.$panelBody.append(this.$listIngredients);

	this.$col5.append(this.$button);
	this.$col5.append(this.$back);
	
}
 
