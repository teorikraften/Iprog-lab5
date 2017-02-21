var StateController = function(home, navbar, selectDish, sidebar, overview, dishinfo, instructions) {

	this.shownStates = [];

	this.removeState = function(state) {
		var index = this.shownStates.indexOf(state);
		if(index > -1) {
			this.shownStates.splice(index, 1);
			console.log("Removed from active states.");
		}
	}

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
		this.removeState('home');
	}

	this.showHome = function() {
		home.showView();
		this.shownStates.push('home');
	}

	this.hideNavbar = function() {
		navbar.hideView();
		this.removeState('navbar');
	}

	this.showNavbar = function() {
		navbar.showView();
		this.shownStates.push('navbar');
	}

	this.hideSelectDish = function() {
		selectDish.hideView();
		this.removeState('selectDish');
	}

	this.showSelectDish = function() {
		selectDish.showView();
		this.shownStates.push('selectDish');
	}

	this.hideSidebar = function() {
		sidebar.hideView();
		this.removeState('sidebar');
	}

	this.showSidebar = function() {
		sidebar.showView();
		this.shownStates.push('sidebar');
	}

	this.hideOverview = function() {
		overview.hideView();
		this.removeState('overview');
	}

	this.showOverview = function() {
		overview.showView();
		this.shownStates.push('overview');
	}

	this.hideDishInfo = function() {
		dishinfo.hideView();
		this.removeState('dishinfo');
	}

	this.showDishInfo = function(dishID) {
		dishinfo.showView(dishID);
		this.shownStates.push('dishinfo');
	}

	this.hideInstructions = function() {
		instructions.hideView();
		this.removeState('instructions');
	}

	this.showInstructions = function() {
		instructions.showView();
		this.shownStates.push('instructions');
	}

}