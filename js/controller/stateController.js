var StateController = function(selectDish, sidebar, overview) {

	this.hideAll = function() {
		$("#content").hide();
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