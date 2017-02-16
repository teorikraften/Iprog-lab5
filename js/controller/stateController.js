var StateController = function(selectDish, sidebar, overview, dishinfo, instructions) {

	this.hideAll = function() {
		this.hideSidebar();
		this.hideOverview();
		this.hideSelectDish();
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

}