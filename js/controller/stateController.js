var StateController = function(home, selectDish, sidebar, overview, dishinfo, instructions) {

	this.hideAll = function() {
		this.hideHome();
		this.hideSidebar();
		this.hideOverview();
		this.hideSelectDish();
		this.hideDishInfo();
		this.hideInstructions();
	}

	this.hideHome = function() {
		home.hideView();
	}

	this.showHome = function() {
		home.showView();
	}

	this.hideSelectDish = function() {
		selectDish.hideView();
	}

	this.showSelectDish = function() {
		selectDish.showView();
	}

	this.hideSidebar = function() {
		sidebar.hideView();
	}

	this.showSidebar = function() {
		sidebar.showView();
	}

	this.hideOverview = function() {
		overview.hideView();
	}

	this.showOverview = function() {
		overview.showView();
	}

	this.hideDishInfo = function() {
		dishinfo.hideView();
	}

	this.showDishInfo = function(dish) {
		dishinfo.showView(dish);
	}

	this.hideInstructions = function() {
		instructions.hideView();
	}

	this.showInstructions = function() {
		instructions.showView();
	}

}